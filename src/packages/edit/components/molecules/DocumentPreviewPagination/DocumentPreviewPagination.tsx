import { useDispatch, useSelector } from 'react-redux';
import styles from './DocumentPreviewPagination.module.css';
import {
  changeCurrentPage,
  getPreviewPaginationData,
} from '@/packages/edit/store/documentPreviewPaginationSlice';
import { ArrowIcon, Button, Icon } from '@/ui/atoms';

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
        <Icon html={ArrowIcon} style={{ rotate: '180deg', display: 'flex' }} />
      </Button>
      <span>
        {currentPage} / {totalPages}
      </span>

      <Button
        className={styles.button}
        onClick={handleNextList}
        disabled={currentPage === totalPages}
      >
        <Icon html={ArrowIcon} />
      </Button>
    </div>
  );
};

export default DocumentPreviewPagination;
