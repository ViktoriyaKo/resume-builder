'use client';
import styles from './DocumentPreview.module.css';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { DocumentPreviewPagination } from '../../molecules';
import { Button } from '@/ui/atoms';
import { useSearchParams } from 'next/navigation';
import { paramsVariables } from '@/constants';
import { ListTemplates } from '@/packages/edit/templates';
import { useTranslation } from 'react-i18next';


const DocumentPreview = () => {
  const contentRef = useRef(null);
  const { t } = useTranslation();

  const searchParams  = useSearchParams();
  const currentTemplate = searchParams.get(paramsVariables.DESIGN) ?? 'simple'

  const handleDownloadPdf = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: `Resume`,
  });

  return (
    <div className={styles.container}>
      <div className={styles.list} ref={contentRef}>
        {ListTemplates[currentTemplate]}
      </div>
      <DocumentPreviewPagination />
      <Button
        className={styles.button}
        onClick={() => handleDownloadPdf(contentRef)}
      >
        {t('download_pdf')}
      </Button>
    </div>
  );
};

export default DocumentPreview;
