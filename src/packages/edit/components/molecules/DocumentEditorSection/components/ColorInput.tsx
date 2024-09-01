import { ShortCategories } from '@/packages/edit/constants';
import { useCallback } from 'react';
import { Input } from '@/ui/atoms';
import clsx from 'clsx';
import styles from '../styles/EditorItems.module.css';

interface IProps {
  caption: string;
  category: ShortCategories;
  template: string;
}

const ColorInput = (props: IProps) => {
  const { caption, category, template } = props;

  const handleChange = useCallback(
    (value: any) => {
      //для каждого template есть два основных цвета в root globals:
      const root = document.documentElement;
      root.style.setProperty(`--${template}-${category}`, value);
    },
    [category, template]
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
