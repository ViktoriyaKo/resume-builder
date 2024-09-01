/* eslint-disable react/display-name */
'use client';
import { TypeOptionsData } from '@/packages/edit/types';
import { forwardRef, LegacyRef, SelectHTMLAttributes } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  label?: string;
  caption?: string;
  options?: TypeOptionsData[];
  selectedValue?: string;
}
// eslint-disable-next-line react/display-name
const Select = forwardRef(
  (props: IProps, ref: LegacyRef<HTMLSelectElement>) => {
    const { label, className, options, ...rest } = props;

    return (
      <div className={className ? className : ''}>
        <label className={'form-label'}>{label}</label>
        <select ref={ref} className="form-select" {...rest}>
          {options &&
            options.length > 0 &&
            options.map((option) => {
              const { caption, value } = option;
              return (
                <option key={value} value={value}>
                  {caption}
                </option>
              );
            })}
        </select>
      </div>
    );
  }
);

const ControlledSelect = forwardRef(
  (props: IProps, ref: LegacyRef<HTMLSelectElement>) => {
    const { control } = useForm();
    const { onChange } = props;

    return (
      <Controller
        control={control}
        name={props.name ?? ''}
        render={({ field }) => {
          return (
            <Select
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

export default ControlledSelect;
