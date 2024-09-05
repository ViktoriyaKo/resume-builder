import { forwardRef, InputHTMLAttributes, LegacyRef } from 'react';

import styles from './Input.module.css';
import clsx from 'clsx';
import {
  Controller,
  useFormContext,
  RegisterOptions,
  FieldError,
} from 'react-hook-form';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: FieldError;
  label?: string;
  inputStyle?: string;
  rules?: RegisterOptions;
}

// eslint-disable-next-line react/display-name
const Input = forwardRef((props: IProps, ref: LegacyRef<HTMLInputElement>) => {
  const {
    label,
    error,
    className,
    inputStyle = 'form-control',
    defaultValue,
    ...rest
  } = props;

  return (
    <div className={className ? className : ''}>
      {label && (
        <label className={clsx('form-label', styles.caption)}>{label}</label>
      )}
      <input className={inputStyle} ref={ref} {...rest} />
      {error?.message && <span className={styles.error}>{error?.message}</span>}
    </div>
  );
});

// eslint-disable-next-line react/display-name
const ControlledInput = forwardRef(
  (props: IProps, ref: LegacyRef<HTMLInputElement>) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();
    const { name, onChange, rules, defaultValue } = props;
    const error = name ? (errors[name] as FieldError | undefined) : undefined;

    
    return (
      <Controller
        defaultValue={defaultValue && defaultValue}
        control={control}
        name={name ?? ''}
        rules={rules && rules}
        render={({ field }) => {
          return (
            <Input
              error={error}
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
