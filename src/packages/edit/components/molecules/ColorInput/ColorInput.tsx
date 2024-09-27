import { ShortCategories } from '@/packages/edit/constants';
import { Input } from '@/ui/atoms';
import clsx from 'clsx';
import styles from './ColorInput.module.css';
import { updateSimpleData } from '@/packages/edit/store/simpleFieldSlice';
import { useDispatch } from 'react-redux';
import { useDebounce } from '@/hooks';
import { useEffect } from 'react';
import { Maybe } from '@/graphql/gql/graphql';

interface IProps {
  caption: string;
  category: ShortCategories;
  template: string;
  color?: Maybe<string>;
}

const ColorInput = (props: IProps) => {
  const { caption, category, template, color } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const element = document.querySelector('#print-content') as HTMLElement;

    if (element) {
      const propertyName = `--${template}-${category}`;
      const computedStyle = getComputedStyle(element);
      const currentColor = computedStyle.getPropertyValue(propertyName);

      if (color) {
        element.style.setProperty(propertyName, color);
      } else if (currentColor) {
        element.style.removeProperty(propertyName);
      }
    }
  }, [color, template, category]);

  const handleChange = useDebounce((value) => {
    const element = document.querySelector('#print-content') as HTMLElement;
    if (element) {
      element.style.setProperty(`--${template}-${category}`, value);
      dispatch(updateSimpleData({ category, value }));
    }
  }, 1000);

  return (
    <Input
      className={styles.wrapper}
      onChange={(e) => handleChange(e.target.value)}
      name={category}
      inputStyle={clsx('form-control-color', styles.input)}
      type={'color'}
      label={caption}
    />
  );
};
export default ColorInput;
