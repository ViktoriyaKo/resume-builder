'use client';
import React, { forwardRef } from 'react';
import 'react-quill-new/dist/quill.snow.css';
import clsx from 'clsx';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

interface TextEditorProps {
  caption?: string;
  className?: string;
  label?: string;
  onChange?: (value: string) => void;
  maxLength?: number;
  value?: string;
}

// eslint-disable-next-line react/display-name
const TextEditor = forwardRef<typeof ReactQuill, TextEditorProps>(
  (props, ref) => {
    const {
      caption,
      className,
      onChange,
      label,
      maxLength = 600,
      ...rest
    } = props;

    const length = rest?.value ? String(rest?.value)?.length : 0;

    const modules = {
      toolbar: [
        // [{ font: [] }],
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        ['link'],
        ['clean'],
      ],
    };

    const formats = [
      // 'font',
      'header',
      'color',
      'background',
      'bold',
      'italic',
      'underline',
      'list',
      'link',
    ];

    return (
      <div className={clsx('mb-3', className && className)}>
        {label && <label className="form-label">{label}</label>}
        <ReactQuill
          modules={modules}
          formats={formats}
          theme="snow"
          {...rest}
          onChange={onChange}
        />
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

export default TextEditor;
