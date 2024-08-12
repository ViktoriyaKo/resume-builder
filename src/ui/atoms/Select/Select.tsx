'use client';
import { TypeOptionsData } from '@/packages/edit/types';
import { forwardRef, LegacyRef, SelectHTMLAttributes } from 'react';

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  label?: string;
  caption?: string;
  options?: TypeOptionsData[];
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

export default Select;
