import { Button, DeleteIcon, EditSmIcon, Icon, Input } from '@/ui/atoms';
import { useTranslation } from 'react-i18next';
import styles from './UploadPhoto.module.css';
import Image from 'next/image';
import gallery from '@images/gallery.png';
import { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import { getStateInitialFormData } from '@/packages/edit/store/initialFormSlice';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImageToDB } from '@/packages/edit/services';
import { updateSimpleData } from '@/packages/edit/store/simpleFieldSlice';
import { ShortCategories } from '@/packages/edit/constants';
import { ModalWrapper } from '@/ui/organisms';
import ReactCrop, { type Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const UploadPhoto = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { initialFormData } = useSelector(getStateInitialFormData);
  const { image } = initialFormData;
  const initialPhoto =
    image && 'url' in image ? image?.url : image?.data?.attributes?.url;
  const [photo, setPhoto] = useState(initialPhoto);

  //imageEditor:
  const [isOpen, setOpen] = useState(false);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imgSrc, setImgSrc] = useState('');
  // const [scale, setScale] = useState(1);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (initialPhoto) {
      setPhoto(initialPhoto);
    }
  }, [initialPhoto]);

  const handleUploadPhotoClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const methods = useFormContext();
  const { setValue } = methods;

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const target = e.target as HTMLInputElement;
    if (target?.files && target?.files?.length > 0) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || '')
      );
      reader.readAsDataURL(target.files?.[0]);
      setOpen(true);
    }
  };

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget;
    setCrop({
      unit: 'px',
      width,
      height,
      x: 0,
      y: 0,
    });
  }

  const handleDeleteImage = () => {
    setPhoto('');
    setValue('image', null);
  };

  const onDownloadCropClick = () => {
    if (!completedCrop || !imgRef.current) {
      return;
    }
    const image = imgRef.current;
    const canvas = canvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    if (canvas) {
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      canvas.width = crop.width * scaleX;
      canvas.height = crop.height * scaleY;

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width * scaleX,
        crop.height * scaleY
      );

      canvas.toBlob(
        async (blob) => {
          if (blob) {
            const croppedImageFile = new File([blob], 'cropped-image.png', {
              type: 'image/png',
            });

            const formData = new FormData();
            formData.append('files', croppedImageFile);
            const objectUrl = URL.createObjectURL(croppedImageFile);
            setPhoto(objectUrl);
            dispatch(
              updateSimpleData({
                category: ShortCategories.IMAGE,
                value: objectUrl,
              })
            );
            const data = await uploadImageToDB(formData);
            const imageId = data?.[0]?.id;

            if (imageId) {
              if (inputRef.current) {
                setValue('image', imageId);
              }
            }
          }
        },
        'image/jpeg',
        0.5
      );
    }
    setOpen(false);
  };

  return (
    <div
      className={clsx(styles.wrapper, { [styles.active]: !photo })}
      onClick={!photo && !isOpen ? handleUploadPhotoClick : undefined}
    >
      <Input
        ref={inputRef}
        className={styles.input}
        accept="image/x-png,image/gif,image/jpeg, .jpg, .jpeg, .gif, .png, .tiff, .webp"
        type={'file'}
        label={t('Upload photo')}
        onChange={handleImageChange}
      />
      <Image
        src={photo || gallery}
        alt={'photo'}
        width={60}
        height={60}
        className={styles.image}
      />
      {photo ? (
        <div className={styles.actions}>
          <Button onClick={handleUploadPhotoClick} className={styles.button}>
            <Icon html={EditSmIcon} />
            {t('Edit photo')}
          </Button>
          <Button onClick={handleDeleteImage} className={styles.button}>
            <Icon html={DeleteIcon} />
            {t('Delete')}
          </Button>
        </div>
      ) : (
        <p className={styles.caption}>{t('Upload photo')}</p>
      )}
      <ModalWrapper isOpen={isOpen} onClose={() => setOpen(false)}>
        {imgSrc && (
          <div className={styles.modal}>
            <ReactCrop
              crop={crop}
              onChange={(c) => setCrop(c)}
              onComplete={(c) => setCompletedCrop(c)}
            >
              <Image
                ref={imgRef}
                className={styles.cropImage}
                width={100}
                height={100}
                src={imgSrc}
                alt={'preview-image'}
                onLoad={onImageLoad}
              />
            </ReactCrop>
            {/* <div className={styles.wrapperZoom}>
              <Button
                onClick={() => setScale((prev) => prev - 0.1)}
                disabled={scale <= 0.2}
              >
                <Icon html={ZoomOut} />
              </Button>
              {scale.toFixed(1)}
              <Button
                onClick={() => setScale((prev) => prev + 0.1)}
                disabled={scale >= 3}
              >
                <Icon html={ZoomIn} />
              </Button>
            </div> */}
            <Button
              onClick={onDownloadCropClick}
              className={styles.downloadButton}
            >
              Add photo
            </Button>
            <canvas ref={canvasRef} style={{ display: 'none' }} />
          </div>
        )}
      </ModalWrapper>
    </div>
  );
};

export default UploadPhoto;
