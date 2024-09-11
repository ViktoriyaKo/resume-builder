'use client';
import { Button } from '@/ui/atoms';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import styles from './ModalConfirmation.module.css';
import clsx from 'clsx';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  handleClick: () => void;
  title?: string;
}

const ModalConfirmation = (props: Props) => {
  const { isOpen, onClose, title, handleClick } = props;

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      {
        <div className={styles.container}>
          <p className={styles.title}>{title}</p>
          <div className={styles.wrapperButtons}>
            <Button
              onClick={handleClick}
              className={clsx(styles.button, styles.confirm)}
            >
              Yes
            </Button>
            <Button
              onClick={onClose}
              className={clsx(styles.button, styles.cancel)}
            >
              Cancel
            </Button>
          </div>
        </div>
      }
    </ModalWrapper>
  );
};

export default ModalConfirmation;
