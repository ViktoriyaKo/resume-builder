import { ShortCategories } from '@/packages/edit/constants';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { updateAdditionalField } from '@/packages/edit/store/shortFieldSlice';
import { Input } from '@/ui/atoms';
import clsx from 'clsx';
import styles from '../styles/EditorItems.module.css';

const ColorInput = () => {
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (value: any) =>
      dispatch(
        updateAdditionalField({ category: ShortCategories.BACKGROUND, value })
      ),
    []
  );

  return (
    <Input
      onChange={(e) => handleChange(e.target.value)}
      name={'color'}
      inputStyle={clsx('form-control-color', styles.input)}
      type={'color'}
      defaultValue={'#f0f0f0'}
      caption={'Choose color for template:'}
    />
  );
};
export default ColorInput;
