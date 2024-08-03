import { addData, removeDataItem } from '@/packages/edit/store/dataSlice';
import { useDispatch } from 'react-redux';

const useHandleData = (category: string) => {
  const dispatch = useDispatch();

  const addListItem = () => {
    dispatch(addData(category));
  };

  const removeListItem = (id: number) => {
    dispatch(removeDataItem({ category: category, id: id }));
  };

  return { addListItem, removeListItem };
};

export default useHandleData;
