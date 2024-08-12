'use client';
import styles from './View.module.css';
import { useRef } from 'react';
import Resume from '@/packages/edit/templates/simple/components/organisms/Resume';
import { useReactToPrint } from 'react-to-print';
import { Pagination } from '../../molecules';

const View = () => {
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
      <Pagination />
      <button
        className={styles.button}
        onClick={() => handleDownloadPdf(contentRef)}
      >
        Download PDF
      </button>
    </div>
  );
};

export default View;
