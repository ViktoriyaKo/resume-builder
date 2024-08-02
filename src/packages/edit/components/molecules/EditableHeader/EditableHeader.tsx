import { Icon } from '@/ui/atoms';
import { EditIcon } from '@/ui/atoms/Icons/EditIcon';
import { useRef, useState } from 'react';
import styles from './EditableHeader.module.css';
import { useOnClickOutside } from '@/hooks';

interface IProps {
  title: string;
  description?: string;
}

const EditableHeader = (props: IProps) => {
  const { title, description } = props;
  const [text, setText] = useState(title);
  const [readonly, setReadonly] = useState(true);
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
        <input
          ref={ref}
          type="text"
          value={text}
          className={styles.input}
          onChange={(e) => setText(e.target.value)}
          readOnly={readonly}
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
