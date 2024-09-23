import { useResizePreviewPagination } from '@/packages/edit/hooks';
import styles from './Resume.module.css';
import { useRef } from 'react';
import { Content, Aside } from './components';
import { useSelector } from 'react-redux';
import { getStateInitialFormData } from '@/packages/edit/store/initialFormSlice';
import { getPreviewPaginationData } from '@/packages/edit/store/documentPreviewPaginationSlice';

const Resume = () => {
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
        <header className={styles.header}>
          <p className={styles.name}>
            {firstName} {lastName}
          </p>
          {job && <p>{job}</p>}
        </header>
        <div className={styles.wrapper}>
          <Content />
          <Aside />
        </div>
      </div>
    </section>
  );
};

export default Resume;
