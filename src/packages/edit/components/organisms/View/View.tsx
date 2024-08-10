'use client';
import handleDownloadPdf from '@/packages/edit/utils/handleDownloadPdf';
import styles from './View.module.css';
import { useRef } from 'react';

const View = () => {
  const contentRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.list} ref={contentRef}>
        test
      </div>
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
