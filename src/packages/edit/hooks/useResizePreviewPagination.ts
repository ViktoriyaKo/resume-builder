import { useSelector, useDispatch } from 'react-redux';
import { RefObject, useEffect } from 'react';
import {
  changeTotalPage,
  getPreviewPaginationData,
} from '../store/documentPreviewPaginationSlice';

const useResizePreviewPagination = (contentRef: RefObject<HTMLDivElement>) => {
  const { heightPage, totalPages, currentPage, marginTop } = useSelector(
    getPreviewPaginationData
  );
  const dispatch = useDispatch();

  const handleResize = () => {
    if (contentRef?.current) {
      const newTotalPage = Math.ceil(
        contentRef.current.scrollHeight / heightPage
      );

      if (newTotalPage !== totalPages) {
        dispatch(changeTotalPage(newTotalPage));
      }
    }
  };

  useEffect(() => {
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

export default useResizePreviewPagination;
