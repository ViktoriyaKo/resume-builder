import { forwardRef, InputHTMLAttributes, LegacyRef } from 'react';

import styles from './Input.module.css';
import clsx from 'clsx';
import { Controller, useForm } from 'react-hook-form';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
  caption?: string;
  inputStyle?: string;
}

// eslint-disable-next-line react/display-name
const Input = forwardRef((props: IProps, ref: LegacyRef<HTMLInputElement>) => {
  const {
    caption,
    error,
    className,
    inputStyle = 'form-control',
    defaultValue,
    ...rest
  } = props;

  return (
    <div className={className ? className : ''}>
      {caption && (
        <label className={clsx('form-label', styles.caption)}>{caption}</label>
      )}
      <input className={inputStyle} ref={ref} {...rest} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
});

// eslint-disable-next-line react/display-name
const ControlledInput = forwardRef(
  (props: IProps, ref: LegacyRef<HTMLInputElement>) => {
    const { control } = useForm();
    const { name, onChange, defaultValue = '' } = props;

    return (
      <Controller
        defaultValue={defaultValue}
        control={control}
        name={name ?? ''}
        render={({ field }) => {
          return (
            <Input
              {...props}
              {...field}
              onChange={(value) => {
                onChange?.(value);
                field.onChange(value);
              }}
              ref={ref}
            />
          );
        }}
      />
    );
  }
);

export default ControlledInput;
