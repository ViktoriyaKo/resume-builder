'use client';
import { Input, Icon } from '@/ui/atoms';
import { EditIcon } from '@/ui/atoms/Icons/EditIcon';
import { useRef, useState, useCallback } from 'react';
import styles from './EditableHeader.module.css';
import { useOnClickOutside } from '@/hooks';
import { ShortCategories } from '@/packages/edit/constants/categories';
import { useSelector } from 'react-redux';
import { getStateSimpleData } from '@/packages/edit/store/simpleFieldSlice';
import { useTranslation } from 'react-i18next';

interface IProps {
  description?: string;
  name: string;
  category: ShortCategories;
}

const EditableHeader = (props: IProps) => {
  const { description, name, category } = props;
  const [readonly, setReadonly] = useState(true);
  const ref = useRef<HTMLInputElement>(null);
  const { titles } = useSelector(getStateSimpleData);
  const { t } = useTranslation();

  const handleClick = useCallback(() => {
    setReadonly(false);
    if (ref.current) {
      const refLength = ref.current.value.length;
      ref.current.focus();
      ref.current.setSelectionRange(refLength, refLength);
    }
  }, []);

  useOnClickOutside(ref, () => {
    if (!readonly) {
      setReadonly(true);
    }
  });

  return (
    <header>
      <div className={styles.wrapper}>
        <Input
          className={styles.wrapperInput}
          name={`${category}.${name}`}
          inputStyle={styles.input}
          ref={ref}
          type={'text'}
          readOnly={readonly}
          defaultValue={t(titles[name] ?? '')}
        />
        <button className={styles.button} onClick={handleClick}>
          <Icon html={EditIcon} />
        </button>
      </div>
      {description && <small className={'text-muted'}>{description}</small>}
    </header>
  );
};

export default EditableHeader;
