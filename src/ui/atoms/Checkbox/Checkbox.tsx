import { forwardRef, InputHTMLAttributes, LegacyRef } from 'react';
import styles from './Checkbox.module.css';
import clsx from 'clsx';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = forwardRef(
  (props: IProps, ref: LegacyRef<HTMLInputElement>) => {
    const { label, name, checked, ...rest } = props;

    return (
      <div className={clsx('form-check', styles.wrapper)}>
        <input
          checked={checked}
          ref={ref}
          className="form-check-input"
          type="checkbox"
          id={name}
          {...rest}
        />
        <label
          className={clsx('form-check-label', styles.label)}
          htmlFor={name}
        >
          {label}
        </label>
      </div>
    );
  }
);

export default Checkbox;
