import { MouseEventHandler, ReactElement } from 'react';
import styles from './EditableAccordion.module.css';
import { Button, Icon } from '@/ui/atoms';
import { DeleteIcon } from '@/ui/atoms';

interface IProps {
  children: ReactElement;
  title: string;
  handleDelete: MouseEventHandler<HTMLButtonElement>;
}

const EditableAccordion = (props: IProps) => {
  const { children, title, handleDelete } = props;

  return (
    <div className={styles.wrapper}>
      <details className={styles.details}>
        <summary className={styles.summary}>{title}</summary>
        <div className={styles.content}>{children}</div>
      </details>
      <Button onClick={handleDelete} className={styles.button}>
        <Icon html={DeleteIcon} />
      </Button>
    </div>
  );
};

export default EditableAccordion;
