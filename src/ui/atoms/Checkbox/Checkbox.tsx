import { forwardRef, InputHTMLAttributes, LegacyRef } from 'react';
import styles from './Checkbox.module.css';
import clsx from 'clsx';
import { Controller, useForm } from 'react-hook-form';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

// eslint-disable-next-line react/display-name
export const Checkbox = forwardRef(
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

// eslint-disable-next-line react/display-name
const ControlledCheckbox = forwardRef(
  (props: IProps, ref: LegacyRef<HTMLInputElement>) => {
    const { control } = useForm();
    const { onChange } = props;

    return (
      <Controller
        control={control}
        name={props.name ?? ''}
        render={({ field }) => {
          return (
            <Checkbox
              {...field}
              {...props}
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

export default ControlledCheckbox;
