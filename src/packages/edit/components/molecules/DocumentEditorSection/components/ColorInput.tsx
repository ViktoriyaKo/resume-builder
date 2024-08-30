import { ShortCategories } from '@/packages/edit/constants';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { updateAdditionalField } from '@/packages/edit/store/shortFieldSlice';
import { Input } from '@/ui/atoms';
import clsx from 'clsx';
import styles from '../styles/EditorItems.module.css';

interface IProps {
  caption: string;
  category: ShortCategories;
}

const ColorInput = (props: IProps) => {
  const { caption, category } = props;
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (value: any) => dispatch(updateAdditionalField({ category, value })),
    [category, dispatch]
  );

  return (
    <Input
      className={styles.wrapper}
      onChange={(e) => handleChange(e.target.value)}
      name={category}
      inputStyle={clsx('form-control-color', styles.input)}
      type={'color'}
      defaultValue={'#f0f0f0'}
      label={caption}
    />
  );
};
export default ColorInput;
