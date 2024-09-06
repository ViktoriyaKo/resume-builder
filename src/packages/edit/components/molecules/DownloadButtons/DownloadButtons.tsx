import { Button, Icon, PdfIcon, TxtIcon, SaveIcon } from '@/ui/atoms';
import styles from './DownloadButtons.module.css';
import { useReactToPrint } from 'react-to-print';
import { useCallback, RefObject } from 'react';

const DownloadButtons = ({
  contentRef,
}: {
  contentRef: RefObject<HTMLDivElement>;
}) => {
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
