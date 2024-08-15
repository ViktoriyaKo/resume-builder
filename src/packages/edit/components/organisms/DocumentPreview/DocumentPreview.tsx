'use client';
import styles from './DocumentPreview.module.css';
import { useRef } from 'react';
import Resume from '@/packages/edit/templates/modern/Resume';
import { useReactToPrint } from 'react-to-print';
import { DocumentPreviewPagination } from '../../molecules';
import { Button } from '@/ui/atoms';

const DocumentPreview = () => {
  const contentRef = useRef(null);

  const handleDownloadPdf = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: `Resume`,
  });

  return (
    <div className={styles.container}>
      <div className={styles.list} ref={contentRef}>
        <Resume />
      </div>
      <DocumentPreviewPagination />
      <Button
        className={styles.button}
        onClick={() => handleDownloadPdf(contentRef)}
      >
        Download PDF
      </Button>
    </div>
  );
};

export default DocumentPreview;
