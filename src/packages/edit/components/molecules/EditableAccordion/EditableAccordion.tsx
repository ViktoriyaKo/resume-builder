import { ReactElement } from 'react';
import styles from './EditableAccordion.module.css';
import { Icon } from '@/ui/atoms';
import { DeleteIcon } from '@/ui/atoms/Icons/DeleteIcon';

interface IProps {
  children: ReactElement;
  title: string;
  id: number;
  handleDelete: (arg: number) => void;
}

const EditableAccordion = (props: IProps) => {
  const { children, title, handleDelete, id } = props;

  return (
    <div className={styles.wrapper}>
      <details className={styles.details}>
        <summary className={styles.summary}>{title}</summary>
        <div className={styles.content}>{children}</div>
      </details>
      <button onClick={() => handleDelete(id)}>
        <Icon html={DeleteIcon} />
      </button>
    </div>
  );
};

export default EditableAccordion;
