import { useResizePreviewPagination } from '@/packages/edit/hooks';
import styles from './ResumeWrapper.module.css';
import { ReactNode, useRef } from 'react';
import { useSelector } from 'react-redux';
import { getStateInitialFormData } from '@/packages/edit/store/initialFormSlice';
import { getPreviewPaginationData } from '@/packages/edit/store/documentPreviewPaginationSlice';
import clsx from 'clsx';

const Resume = ({
  children,
  style,
}: {
  children: ReactNode;
  style: string;
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { marginTop } = useResizePreviewPagination(contentRef);
  const { minHeight } = useSelector(getPreviewPaginationData);
  const { initialFormData } = useSelector(getStateInitialFormData);
  const { contact } = initialFormData;
  const { job, firstName, lastName } = contact ?? {};

  return (
    <section
      className={styles.container}
      style={{ marginTop: `${marginTop}px`, minHeight: `${minHeight}px` }}
      ref={contentRef}
    >
      <div className={styles.inner}>
        <header className={clsx(styles.header, styles[style])}>
          <p className={styles.name}>
            {firstName} {lastName}
          </p>
          {job && <p>{job}</p>}
        </header>
        <div className={styles.wrapper}>{children}</div>
      </div>
    </section>
  );
};

export default Resume;
