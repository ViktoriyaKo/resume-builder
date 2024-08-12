import { useSelector, useDispatch } from 'react-redux';
import { RefObject, useEffect } from 'react';
import {
  changeCurrentPage,
  changeTotalPage,
  getPaginationData,
} from '../store/paginationSlice';

const useResizePagination = (contentRef: RefObject<HTMLDivElement>) => {
  const { heightPage, totalPages, currentPage, marginTop } =
    useSelector(getPaginationData);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (contentRef?.current) {
        const newTotalPage = Math.ceil(
          contentRef.current.scrollHeight / heightPage
        );

        if (newTotalPage !== totalPages) {
          dispatch(changeTotalPage(newTotalPage));
          console.log(newTotalPage);
        }
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
  }, [totalPages, heightPage, currentPage]);

  return { marginTop };
};

export default useResizePagination;
