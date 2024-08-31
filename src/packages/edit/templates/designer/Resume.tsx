import { useResizePreviewPagination } from '@/packages/edit/hooks';
import styles from './Resume.module.css';
import { useRef } from 'react';
import { Aside, Content } from './components';

const Resume = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { marginTop } = useResizePreviewPagination(contentRef);

  return (
    <div
      className={styles.container}
      style={{ marginTop: `${marginTop}px` }}
      ref={contentRef}
    >
      <Aside />
      <Content />
    </div>
  );
};

export default Resume;
