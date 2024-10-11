'use client';
import styles from './DocumentPreview.module.css';
import { useRef } from 'react';
import { DocumentPreviewPagination, DownloadButtons } from '../../molecules';
import { ListTemplates } from '@/packages/edit/templates';

interface IProps {
  currentTemplate: string;
  resume: string;
}

const DocumentPreview = (props: IProps) => {
  const { currentTemplate, resume } = props;
  const contentRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.list} ref={contentRef} id={'print-content'}>
        {ListTemplates[currentTemplate]}
      </div>
      <DocumentPreviewPagination />
      <DownloadButtons resume={resume} contentRef={contentRef} />
    </div>
  );
};

export default DocumentPreview;
