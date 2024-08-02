'use client';
import styles from './CustomLink.module.css';
import Link from 'next/link';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface IProps {
  text: string;
  href: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  className?: string;
}

const CustomLink = (props: IProps) => {
  const { text, href, prefix, suffix, className } = props;
  return (
    <Link href={href} className={clsx(styles.link, className ? className : '')}>
      {prefix}
      {text}
      {suffix}
    </Link>
  );
};

export default CustomLink;
