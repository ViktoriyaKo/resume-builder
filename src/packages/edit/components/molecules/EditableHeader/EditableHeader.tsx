'use client';

import { Icon } from '@/ui/atoms';
import { EditIcon } from '@/ui/atoms/Icons/EditIcon';
import { useRef, useState } from 'react';
import styles from './EditableHeader.module.css';
import { useOnClickOutside } from '@/hooks';
import { Controller } from 'react-hook-form';
import { useControl } from '@/packages/edit/contexts/ControlContext';

interface IProps {
  title: string;
  description?: string;
  value: string;
}

const EditableHeader = (props: IProps) => {
  const { title, description, value } = props;
  const [readonly, setReadonly] = useState(true);
  const control = useControl();
  const ref = useRef<HTMLInputElement>(null);

  const handleCLick = () => {
    setReadonly(false);
    if (ref.current) {
      ref.current.focus();
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
          name={value}
          control={control}
          render={({ field }) => (
            <input
              {...field}
              ref={ref}
              type="text"
              className={styles.input}
              readOnly={readonly}
            />
          )}
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
