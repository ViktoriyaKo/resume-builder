import { Button, Icon, PdfIcon, TxtIcon, PreviewIcon } from '@/ui/atoms';
import styles from './DownloadButtons.module.css';
import { useReactToPrint } from 'react-to-print';
import { useCallback, RefObject, useState } from 'react';
import html2canvas from 'html2canvas';
import { uploadImageToDB } from '@/packages/edit/services';
import { updateResume } from '@/packages/edit/services';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { Modal, ModalWrapper } from '@/ui/organisms';
import Image from 'next/image';
import clsx from 'clsx';

const DownloadButtons = ({
  contentRef,
  resume,
}: {
  contentRef: RefObject<HTMLDivElement>;
  resume: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [openModal, setModal] = useState(false);
  const [openModalPreview, setModalPreview] = useState(false);
  const [preview, setPreview] = useState('');

  const handleDownloadPdf = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: `Resume`,
  });

  const handleDownloadTxt = useCallback(() => {
    const element = contentRef.current;
    if (!element) return;
    const textContent = element.innerText || '';

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Resume.txt';
    a.click();

    URL.revokeObjectURL(url);
  }, []);

  const handleUploadCover = useCallback(async () => {
    const element = contentRef.current;
    if (!element) return;
    setModal(true);

    const canvas = await html2canvas(element);

    canvas.toBlob(async (blob) => {
      if (!blob) return;

      const formData = new FormData();
      formData.append('files', blob);

      const data = await uploadImageToDB(formData);
      const imageId = data?.[0]?.id;
      if (imageId) {
        await dispatch(updateResume({ data: { cover: imageId }, id: resume }));
      }
    }, 'image/png');
  }, []);

  const handlePreview = useCallback(async () => {
    const element = contentRef.current;
    if (!element) return;
    setModalPreview(true);
    const originalDisplay = element.style.display;
    element.style.display = 'block';

    const canvas = await html2canvas(element, { scale: 2 });
    const dataUrl = canvas.toDataURL('image/png');

    setPreview(dataUrl);

    element.style.display = originalDisplay;
  }, []);

  const buttons = [
    {
      text: 'pdf',
      icon: PdfIcon,
      handleClick: () => handleDownloadPdf(contentRef),
    },
    { text: 'txt', icon: TxtIcon, handleClick: () => handleDownloadTxt() },
    {
      text: 'preview',
      icon: PreviewIcon,
      handleClick: () => handlePreview(),
      hiddenDesktop: true,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Button onClick={handleUploadCover} className={styles.saveButton}>
        save <br />
        as draft
      </Button>
      {buttons.map((button) => {
        const { text, icon, handleClick, hiddenDesktop } = button;
        return (
          <Button
            key={text}
            className={clsx(styles.button, { [styles.hide]: hiddenDesktop })}
            onClick={handleClick}
          >
            <Icon html={icon} />
          </Button>
        );
      })}
      <Modal
        isOpen={openModal}
        onClose={() => setModal(false)}
        title={'Your template has saved as draft'}
      />
      <ModalWrapper
        isOpen={openModalPreview}
        onClose={() => setModalPreview(false)}
      >
        {preview && (
          <div className={styles.modal}>
            <Image
              src={preview}
              alt={'preview'}
              width={800}
              height={800}
              quality={100}
              className={styles.image}
            />
          </div>
        )}
      </ModalWrapper>
    </div>
  );
};

export default DownloadButtons;
