import {
  Button,
  Icon,
  PdfIcon,
  TxtIcon,
  TemplateIcon,
  SaveIcon,
} from '@/ui/atoms';
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
import { useEditTemplateContext } from '@/packages/edit';
import { useTranslation } from 'react-i18next';
import jsPDF from 'jspdf';

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
  const [preview] = useState('');
  const { isEditorTemplate, setEditorTemplate } = useEditTemplateContext();
  const { t } = useTranslation();

  // const handleDownloadPdf = useReactToPrint({
  //   content: () => contentRef.current,
  //   documentTitle: `Resume`,
  // });

  const handleDownloadPdf = () => {
    const content = document.querySelector('#print-content') as HTMLDivElement;
    if (content) {
      content.style.display = 'block';
      content.style.overflow = 'visible';
      content.style.height = 'auto';

      html2canvas(content, { scale: 4 })
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p', 'pt', 'a4');

          const imgWidth = 595; // width in pt (letter size)
          const pageHeight = 843; // height in pt (letter size)
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          let heightLeft = imgHeight;

          let position = 0;

          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }

          pdf.save('document.pdf');
        })
        .finally(() => {
          content.style.display = 'none';
          content.style.overflow = 'hidden';
          content.style.height = '833px';
        });
    }
  };

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

  const buttons = [
    {
      text: 'save',
      icon: SaveIcon,
      handleClick: () => handleUploadCover(),
      visible: true,
    },
    {
      text: 'pdf',
      icon: PdfIcon,
      handleClick: () => handleDownloadPdf(),
      visible: true,
    },
    {
      text: 'txt',
      icon: TxtIcon,
      handleClick: () => handleDownloadTxt(),
      visible: true,
    },
    {
      text: 'template',
      icon: TemplateIcon,
      handleClick: () => setEditorTemplate(true),
      visible: !isEditorTemplate,
    },
  ];

  return (
    <div className={styles.wrapper}>
      {buttons.map((button) => {
        const { text, icon, handleClick, visible } = button;
        return (
          visible && (
            <Button
              key={text}
              className={clsx(styles.button)}
              onClick={handleClick}
            >
              <Icon html={icon} />
            </Button>
          )
        );
      })}
      <Modal
        isOpen={openModal}
        onClose={() => setModal(false)}
        title={t('save_message')}
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
