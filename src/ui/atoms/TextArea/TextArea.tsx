'use client';
import clsx from 'clsx';
import { forwardRef, LegacyRef, TextareaHTMLAttributes } from 'react';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  label?: string;
  caption?: string;
}

// eslint-disable-next-line react/display-name
const TextArea = forwardRef(
  (props: IProps, ref: LegacyRef<HTMLTextAreaElement>) => {
    const {
      label,
      caption,
      rows = 3,
      maxLength = 600,
      className,
      ...rest
    } = props;

    const length = rest?.value ? String(rest?.value)?.length : 0;
    return (
      <div className={clsx('mb-3', className && className)}>
        {label && <label className="form-label">{label}</label>}
        <textarea
          ref={ref}
          className="form-control"
          rows={rows}
          {...rest}
        ></textarea>
        <div className="d-flex justify-content-between pt-1">
          {caption && (
            <small className="form-label text-muted">{caption}</small>
          )}
          <p className="form-label text-muted">
            {length}/{maxLength}
          </p>
        </div>
      </div>
    );
  }
);

export default TextArea;
