import { ButtonHTMLAttributes } from 'react';
import styles from './ControlButton.module.css';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const ControlButton = (props: IProps) => {
  const { text, ...rest } = props;
  return (
    <button className={styles.button} {...rest}>
      {text}
    </button>
  );
};

export default ControlButton;
