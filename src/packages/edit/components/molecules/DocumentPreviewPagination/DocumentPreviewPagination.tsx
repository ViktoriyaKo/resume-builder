import { useDispatch, useSelector } from 'react-redux';
import styles from './DocumentPreviewPagination.module.css';
import {
  changeCurrentPage,
  getPreviewPaginationData,
} from '@/packages/edit/store/documentPreviewPaginationSlice';
import { Button } from '@/ui/atoms';

const DocumentPreviewPagination = () => {
  const { currentPage, totalPages } = useSelector(getPreviewPaginationData);
  const dispatch = useDispatch();

  const handlePrevList = () => dispatch(changeCurrentPage(currentPage - 1));

  const handleNextList = () => dispatch(changeCurrentPage(currentPage + 1));

  return (
    <div className={styles.wrapper}>
      <Button
        className={styles.button}
        onClick={handlePrevList}
        disabled={currentPage === 1}
      >
        &#11164;
      </Button>
      <span>
        {currentPage} / {totalPages}
      </span>

      <Button
        className={styles.button}
        onClick={handleNextList}
        disabled={currentPage === totalPages}
      >
        &#11166;
      </Button>
    </div>
  );
};

export default DocumentPreviewPagination;
