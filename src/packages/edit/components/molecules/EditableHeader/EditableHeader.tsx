'use client';

import { ControlledInput, Icon } from '@/ui/atoms';
import { EditIcon } from '@/ui/atoms/Icons/EditIcon';
import { useRef, useState, useCallback } from 'react';
import styles from './EditableHeader.module.css';
import { useOnClickOutside } from '@/hooks';
import { useDispatch } from 'react-redux';
import { ShortCategories } from '@/packages/edit/constants/categories';
import { updateShortField } from '@/packages/edit/store/shortFieldSlice';
import { UpdateShortFieldActionPayload } from '@/packages/edit/types';

interface IProps {
  title: string;
  description?: string;
  name: string;
  category: ShortCategories;
}

const EditableHeader = (props: IProps) => {
  const { title, description, name, category } = props;
  const [readonly, setReadonly] = useState(true);
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleCLick = () => {
    setReadonly(false);
    if (ref.current) {
      const refLength = ref.current.value.length;
      ref.current.focus();
      ref.current.setSelectionRange(refLength, refLength);
    }
  };

  useOnClickOutside(ref, () => {
    if (!readonly) {
      setReadonly(true);
    }
  });

  const handleChange = useCallback(
    ({ category, name, value }: UpdateShortFieldActionPayload) => {
      dispatch(updateShortField({ category, name, value }));
    },
    []
  );

  return (
    <header className={'mt-3'}>
      <div className={styles.wrapper}>
        <ControlledInput
          name={name}
          defaultValue={title}
          inputStyle={styles.input}
          ref={ref}
          type={'text'}
          readOnly={readonly}
          onChange={(e) =>
            handleChange({ value: e.target.value, category, name })
          }
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
