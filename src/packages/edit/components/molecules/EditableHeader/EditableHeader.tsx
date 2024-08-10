'use client';

import { Icon } from '@/ui/atoms';
import { EditIcon } from '@/ui/atoms/Icons/EditIcon';
import { useRef, useState } from 'react';
import styles from './EditableHeader.module.css';
import { useOnClickOutside } from '@/hooks';
import { Controller } from 'react-hook-form';
import { useControl } from '@/packages/edit/contexts/ControlContext';
import { useDispatch } from 'react-redux';
import { ShortCategories } from '@/packages/edit/constants/categories';
import { updateShortField } from '@/packages/edit/store/shortFieldSlice';

interface IProps {
  title: string;
  description?: string;
  name: string;
  category: ShortCategories;
}

const EditableHeader = (props: IProps) => {
  const { title, description, name, category } = props;
  const [readonly, setReadonly] = useState(true);
  const control = useControl();
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleCLick = () => {
    setReadonly(false);
    if (ref.current) {
      const refLength = ref.current.value.length;
      ref.current.focus();
      ref.current.setSelectionRange(
        refLength,
        refLength
      );
    }
  };

  useOnClickOutside(ref, () => {
    if (!readonly) {
      setReadonly(true);
    }
  });

  return (
    <header className={'mt-3'}>
      <div className={styles.wrapper}>
        <Controller
          defaultValue={title}
          name={name}
          control={control}
          render={({ field }) => {
            const handleChange = (value: string) => {
              field.onChange(value);
              dispatch(updateShortField({ category, name, value }));
            };
            return (
              <input
                {...field}
                ref={ref}
                type="text"
                className={styles.input}
                readOnly={readonly}
                onChange={(e) => handleChange(e.target.value)}
              />
            );
          }}
        />

        <button onClick={handleCLick}>
          <Icon html={EditIcon} />
        </button>
      </div>
      {description && <small className={'text-muted'}>{description}</small>}
    </header>
  );
};

export default EditableHeader;
