'use client';

import { type FC, type MouseEvent, type ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './ModalWrapper.module.css';

interface Props {
  isOpen: boolean;
  children: ReactNode;
  onClose?: () => void;
}

const ModalWrapper: FC<Props> = (props) => {
  const { isOpen, children, onClose } = props;
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const handleClickOutside = (event: MouseEvent<HTMLDivElement>): void => {
    const target = event.target as HTMLDivElement;

    if (target.classList.contains(`${styles.out}`) && onClose) {
      onClose();
    }
  };

  const portalElement = (
    <div className={styles.out} onClick={handleClickOutside}>
      {children}
    </div>
  );

  return isOpen && createPortal(portalElement, document.body);
};

export default ModalWrapper;
