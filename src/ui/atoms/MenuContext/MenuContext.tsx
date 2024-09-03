import Button from '../Button/Button';
import styles from './MenuContext.module.css';
import clsx from 'clsx';
import { RefObject } from 'react';

interface IProps {
  options: { name: string; handleClick: () => void }[];
  isToggled: boolean;
  position: { x: number; y: number };
  contextMenuRef: RefObject<HTMLDivElement>;
}

const MenuContext = (props: IProps) => {
  const { options, isToggled, position, contextMenuRef } = props;

  return (
    <div
      className={clsx(styles.wrapper, isToggled ? styles.active : '')}
      ref={contextMenuRef}
      style={{ top: position.y + 2 + 'px', left: position.x + 2 + 'px' }}
    >
      {options.map((item) => {
        const { name, handleClick } = item;
        return (
          <Button className={styles.item} key={name} onClick={handleClick}>
            {name}
          </Button>
        );
      })}
    </div>
  );
};

export default MenuContext;
