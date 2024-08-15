'use client';
import { Button } from '@/ui/atoms';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import styles from './Modal.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

const Modal = (props: Props) => {
  const { isOpen, onClose, title, description } = props;

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      {
        <div className={styles.container}>
          <h4 className={styles.title}>{title}</h4>
          <div>{description}</div>
          <Button onClick={onClose} className={styles.button}>
            Close
          </Button>
        </div>
      }
    </ModalWrapper>
  );
};

export default Modal;
