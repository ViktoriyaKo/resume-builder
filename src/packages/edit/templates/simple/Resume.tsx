import { useResizePreviewPagination } from '@/packages/edit/hooks';
import Content from './components/Content/Content';
import Hero from './components/Hero/Hero';
import styles from './Resume.module.css';
import { useRef } from 'react';

const Resume = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { marginTop } = useResizePreviewPagination(contentRef);

  return (
    <div
      className={styles.container}
      style={{ marginTop: `${marginTop}px` }}
      ref={contentRef}
    >
      <Hero />
      <Content />
    </div>
  );
};

export default Resume;
