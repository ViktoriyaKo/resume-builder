import { Button, DeleteIcon, EditSmIcon, Icon, Input } from '@/ui/atoms';
import { useTranslation } from 'react-i18next';
import styles from './UploadPhoto.module.css';
import Image from 'next/image';
import gallery from '@images/gallery.png';
import { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import { getStateInitialFormData } from '@/packages/edit/store/initialFormSlice';
import { useSelector } from 'react-redux';
import { uploadImageToDB } from '@/packages/edit/services';

const UploadPhoto = () => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { initialFormData } = useSelector(getStateInitialFormData);
  const { image } = initialFormData;
  const photo = image?.url ?? image?.data?.attributes?.url;
  const [hasPhoto, setPhoto] = useState(photo);

  useEffect(() => {
    if (photo) {
      setPhoto(photo);
    }
  }, [photo]);

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
      const file = target.files[0];
      const formData = new FormData();
      formData.append('files', file);

      const data = await uploadImageToDB(formData);
      const imageId = data?.[0]?.id;
      console.log(imageId);
      if (imageId) {
        if (inputRef.current) {
          const id = 2;
          setValue('image', imageId);
        }
      }
    }
  };

  const handleDeleteImage = () => {
    setPhoto('');
    setValue('image', null);
  };

  return (
    <div
      className={clsx(styles.wrapper, { [styles.active]: !hasPhoto })}
      onClick={!hasPhoto ? handleUploadPhotoClick : undefined}
    >
      <Input
        ref={inputRef}
        className={styles.input}
        accept="image/x-png,image/gif,image/jpeg, .jpg, .jpeg, .gif, .png, .tiff"
        type={'file'}
        label={t('Upload photo')}
        onChange={handleImageChange}
      />
      <Image
        src={photo ?? gallery}
        alt={'photo'}
        width={60}
        height={60}
        className={styles.image}
      />
      {hasPhoto ? (
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
    </div>
  );
};

export default UploadPhoto;
