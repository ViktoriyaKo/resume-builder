'use client';
import { TextareaHTMLAttributes } from 'react';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  label?: string;
  caption?: string;
}

const Select = (props: IProps) => {
  const { label, className, options, ...rest } = props;

  return (
    <div className={className ? className : ''}>
      <label className={'form-label'}>{label}</label>
      <select className="form-select">
        {options.map((option) => {
          const { caption, value } = option;
          return (
            <option key={value} defaultValue={value}>
              {caption}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
