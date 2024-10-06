import { useResizePreviewPagination } from '@/packages/edit/hooks';
import styles from './Resume.module.css';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { getPreviewPaginationData } from '@/packages/edit/store/documentPreviewPaginationSlice';
import { Header, Aside, Content } from './components';

const Resume = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { marginTop } = useResizePreviewPagination(contentRef);
  const { minHeight } = useSelector(getPreviewPaginationData);

  return (
    <div
      className={styles.container}
      style={{
        marginTop: `${marginTop}px`,
        minHeight: `${minHeight}px`,
      }}
      ref={contentRef}
    >
      <Header />
      <div className={styles.wrapper}>
        <Aside/>
        <Content />
      </div>
    </div>
  );
};

export default Resume;
