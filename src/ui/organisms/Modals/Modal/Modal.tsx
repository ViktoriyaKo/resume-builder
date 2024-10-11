'use client';
import { Button } from '@/ui/atoms';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import styles from './Modal.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  closeLabel: string;
}

const Modal = (props: Props) => {
  const { isOpen, onClose, title, description, closeLabel } = props;

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      {
        <div className={styles.container}>
          {title && <h4 className={styles.title}>{title}</h4>}
          {description && <div>{description}</div>}
          <Button onClick={onClose} className={styles.button}>
            {closeLabel}
          </Button>
        </div>
      }
    </ModalWrapper>
  );
};

export default Modal;
