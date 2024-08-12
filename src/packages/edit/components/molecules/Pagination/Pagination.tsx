import { useDispatch, useSelector } from 'react-redux';
import styles from './Pagination.module.css';
import {
  changeCurrentPage,
  getPaginationData,
} from '@/packages/edit/store/paginationSlice';

const Pagination = () => {
  const { currentPage, totalPages } = useSelector(getPaginationData);
  const dispatch = useDispatch();

  const handlePrevList = () => dispatch(changeCurrentPage(currentPage - 1));

  const handleNextList = () => dispatch(changeCurrentPage(currentPage + 1));

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={handlePrevList}
        disabled={currentPage === 1}
      >
        &#11160;
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>

      <button
        className={styles.button}
        onClick={handleNextList}
        disabled={currentPage === totalPages}
      >
        &#11162;
      </button>
    </div>
  );
};

export default Pagination;
