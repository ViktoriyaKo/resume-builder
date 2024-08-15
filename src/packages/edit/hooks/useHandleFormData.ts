import { addData, removeData } from '@/packages/edit/store/dataSlice';
import { useDispatch } from 'react-redux';
import { TypeFieldData, UpdateValueActionPayload } from '../types';
import { Categories } from '../constants';
import { updateValueToData } from '@/packages/edit/store/dataSlice';

interface IProps {
  category: Categories;
  data: TypeFieldData[];
}

const useHandleFormData = (arg: IProps) => {
  const { category, data } = arg;
  const dispatch = useDispatch();

  const addListItem = () => {
    dispatch(addData({ category, data }));
  };

  const removeListItem = (id?: string) => {
    dispatch(removeData({ category, id }));
  };

  const updateValueField = (props: UpdateValueActionPayload) => {
    const { uuid, name, value } = props;
    dispatch(updateValueToData({ category, uuid, name, value }));
  };

  return {
    addListItem,
    removeListItem,
    updateValueField,
  };
};

export default useHandleFormData;
