'use client';
import { useResizePreviewPagination } from '@/packages/edit/hooks';
import styles from './ResumeWrapper.module.css';
import { ReactNode, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getStateInitialFormData } from '@/packages/edit/store/initialFormSlice';
import { getPreviewPaginationData } from '@/packages/edit/store/documentPreviewPaginationSlice';
import clsx from 'clsx';
import Content from '../Content/Content';
import Aside from '../Aside/Aside';

const Resume = ({ style }: { style: string }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { marginTop } = useResizePreviewPagination(contentRef);
  const { minHeight } = useSelector(getPreviewPaginationData);
  const { initialFormData } = useSelector(getStateInitialFormData);
  const { contact } = initialFormData ?? {};
  const { firstName, lastName } = contact ?? {};

  return (
    <div
      className={styles.container}
      style={{ marginTop: `${marginTop}px`, minHeight: `${minHeight}px` }}
      ref={contentRef}
    >
      <div className={styles.inner}>
        <header className={clsx(styles.header, style && styles[style])}>
          {firstName && lastName && (
            <p className={styles.name}>
              {firstName} {lastName}
            </p>
          )}
          {contact?.job && <p>{contact?.job}</p>}
        </header>
        <div className={styles.wrapper}>
          {/* <Content style={style} />
          <Aside style={style} /> */}
        </div>
      </div>
    </div>
  );
};

export default Resume;
