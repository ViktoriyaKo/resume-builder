import { useSelector, useDispatch } from 'react-redux';
import { RefObject, useEffect } from 'react';
import {
  changeCurrentPage,
  changeTotalPage,
  getPaginationData,
} from '../store/paginationSlice';

// todo не работает когда контент уменьшается!!!
const useResizePagination = (contentRef: RefObject<HTMLDivElement>) => {
  const { heightPage, totalPages, currentPage, marginTop } =
    useSelector(getPaginationData);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (
        contentRef?.current &&
        contentRef?.current?.scrollHeight > totalPages * heightPage
      ) {
        const newTotalPage = Math.ceil(
          contentRef.current?.scrollHeight / heightPage
        );
        dispatch(changeTotalPage(newTotalPage));
        dispatch(changeCurrentPage(currentPage + 1));
      }
    };

    const observer = new ResizeObserver(handleResize);
    if (contentRef?.current) {
      observer.observe(contentRef.current);
    }
    handleResize();
    return () => {
      observer.disconnect();
    };
  }, [totalPages, heightPage]);

  return { marginTop };
};

export default useResizePagination;
