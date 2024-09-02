import { useSelector, useDispatch } from 'react-redux';
import { RefObject, useEffect, useCallback } from 'react';
import {
  changeTotalPage,
  getPreviewPaginationData,
} from '../store/documentPreviewPaginationSlice';

const useResizePreviewPagination = (contentRef: RefObject<HTMLDivElement>) => {
  const { heightPage, totalPages, marginTop } = useSelector(
    getPreviewPaginationData
  );
  const dispatch = useDispatch();

  const handleResize = useCallback(() => {
    if (contentRef?.current) {
      const newTotalPage = Math.ceil(
        contentRef.current.scrollHeight / heightPage
      );

      if (newTotalPage !== totalPages) {
        dispatch(changeTotalPage(newTotalPage));
        //TODO при уменьшении контента не отрабатывает из-за фиксации высоты. fix, но как??
        contentRef.current.style.minHeight = `${newTotalPage * heightPage}px`;
      }
    }
  }, [heightPage, totalPages, dispatch]);

  useEffect(() => {
    const observer = new ResizeObserver(handleResize);
    if (contentRef?.current) {
      observer.observe(contentRef.current);
    }
    handleResize();
    return () => {
      observer.disconnect();
    };
  }, [totalPages, heightPage, handleResize]);

  return { marginTop };
};

export default useResizePreviewPagination;
