import { forwardRef, InputHTMLAttributes, LegacyRef } from 'react';

import styles from './Input.module.css';
import clsx from 'clsx';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  caption?: string;
  inputStyle?: string;
}

// eslint-disable-next-line react/display-name
const Input = forwardRef((props: IProps, ref: LegacyRef<HTMLInputElement>) => {
  const { caption, error, className, inputStyle, ...rest } = props;

  return (
    <div className={className ? className : ''}>
      {caption && (
        <label className={clsx('form-label', styles.caption)}>{caption}</label>
      )}
      <input
        className={clsx('form-control', inputStyle ? inputStyle : '')}
        ref={ref}
        {...rest}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
});

export default Input;
