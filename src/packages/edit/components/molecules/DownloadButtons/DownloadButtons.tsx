import { Button, Icon, PdfIcon, TxtIcon, SaveIcon } from '@/ui/atoms';
import styles from './DownloadButtons.module.css';
import { useReactToPrint } from 'react-to-print';
import { useCallback, RefObject } from 'react';
import html2canvas from 'html2canvas';
import { uploadImageToDB } from '@/packages/edit/services';
import { updateResume } from '@/packages/edit/services';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';

const DownloadButtons = ({
  contentRef,
}: {
  contentRef: RefObject<HTMLDivElement>;
}) => {
  const dispatch = useDispatch<AppDispatch>();

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

    const canvas = await html2canvas(element);

    canvas.toBlob(async (blob) => {
      if (!blob) return;

      const formData = new FormData();
      formData.append('files', blob);

      const data = await uploadImageToDB(formData);
      const imageId = data?.[0]?.id;
      console.log(imageId);
      if (imageId) {
        await dispatch(updateResume({ data: { cover: imageId }, id: '37' }));
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
    {
      caption: 'save',
      icon: SaveIcon,
      handleClick: () => handleUploadCover(),
    },
  ];

  return (
    <div className={styles.wrapper}>
      {buttons.map((button) => {
        const { caption, icon, handleClick } = button;
        return (
          <Button key={caption} className={styles.button} onClick={handleClick}>
            <Icon html={icon} />
          </Button>
        );
      })}
    </div>
  );
};

export default DownloadButtons;
