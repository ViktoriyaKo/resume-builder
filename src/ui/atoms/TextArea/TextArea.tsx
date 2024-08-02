'use client';
import clsx from 'clsx';
import { ChangeEvent, TextareaHTMLAttributes, useState } from 'react';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  label?: string;
  caption?: string;
}

const TextArea = (props: IProps) => {
  const {
    id,
    label,
    caption,
    rows = 3,
    maxLength = 600,
    className,
    ...rest
  } = props;
  const [text, setText] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className={clsx('mb-3', className && className)}>
      {label && <label className="form-label">{label}</label>}
      <textarea
        onChange={handleChange}
        className="form-control"
        rows={rows}
        {...rest}
      ></textarea>
      <div className="d-flex justify-content-between pt-1">
        {caption && <small className="form-label text-muted">{caption}</small>}
        <p className="form-label text-muted">
          {text.length}/{maxLength}
        </p>
      </div>
    </div>
  );
};

export default TextArea;
