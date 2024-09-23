import { useResizePreviewPagination } from '@/packages/edit/hooks';
import styles from './Resume.module.css';
import { useRef } from 'react';
import { Aside, Content } from './components';
import { useSelector } from 'react-redux';
import { getPreviewPaginationData } from '@/packages/edit/store/documentPreviewPaginationSlice';


const Resume = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { marginTop } = useResizePreviewPagination(contentRef);
  const { minHeight } = useSelector(getPreviewPaginationData);

  return (
    <div
      className={styles.container}
      style={{ marginTop: `${marginTop}px`, 
      minHeight: `${minHeight}px`,
    }}
      ref={contentRef}
    >
      <Aside/>
      <Content />
    </div>
  );
};

export default Resume;
