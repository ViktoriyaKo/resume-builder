import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = (props: IProps) => {
  const { children, className = styles.button, ...rest } = props;
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
