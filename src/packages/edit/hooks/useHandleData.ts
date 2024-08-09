import { addData, removeDataItem } from '@/packages/edit/store/dataSlice';
import { useDispatch } from 'react-redux';
import { TypeFieldData } from '../types';
import { Categories } from '../constants';

interface IProps {
  category: Categories;
  data: TypeFieldData[];
}

const useHandleData = (props: IProps) => {
  const { category, data } = props;
  const dispatch = useDispatch();

  const addListItem = () => {
    dispatch(addData({ category, data }));
  };

  const removeListItem = (id: string) => {
    dispatch(removeDataItem({ category, id }));
  };

  return { addListItem, removeListItem };
};

export default useHandleData;
