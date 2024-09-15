import { Button, Icon, PdfIcon, TxtIcon, SaveIcon } from '@/ui/atoms';
import styles from './DownloadButtons.module.css';
import { useReactToPrint } from 'react-to-print';
import { useCallback, RefObject, useState } from 'react';
import html2canvas from 'html2canvas';
import { uploadImageToDB } from '@/packages/edit/services';
import { updateResume } from '@/packages/edit/services';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { Modal } from '@/ui/organisms';

const DownloadButtons = ({
  contentRef,
  resume,
}: {
  contentRef: RefObject<HTMLDivElement>;
  resume: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [openModal, setModal] = useState(false);


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
    setModal(true)

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

  const buttons = [
    {
      caption: 'pdf',
      icon: PdfIcon,
      handleClick: () => handleDownloadPdf(contentRef),
    },
    { caption: 'txt', icon: TxtIcon, handleClick: () => handleDownloadTxt() },
  ];

  return (
    <div className={styles.wrapper}>
      <Button onClick={handleUploadCover} className={styles.saveButton}>
        save <br/>as draft
      </Button>
      {buttons.map((button) => {
        const { caption, icon, handleClick } = button;
        return (
          <Button key={caption} className={styles.button} onClick={handleClick}>
            <Icon html={icon} />
          </Button>
        );
      })}
      <Modal
        isOpen={openModal}
        onClose={() => setModal(false)}
        title={'Your template has saved as draft'}
      />
    </div>
  );
};

export default DownloadButtons;
