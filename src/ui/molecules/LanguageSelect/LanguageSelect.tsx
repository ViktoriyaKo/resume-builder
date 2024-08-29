'use client';
import Link from 'next/link';
import { useRef } from 'react';

import styles from './LanguageSelect.module.css';
import { useParams, usePathname } from 'next/navigation';
import { useOnClickOutside } from '@/hooks';
import getPathname from '@/utils/query/getPathname';

export default function LanguageSelect() {
  const { lang } = useParams();
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement | null>(null);
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  const languages = {
    ru: 'ru',
    en: 'en',
    pl: 'pl',
  };

  useOnClickOutside(menuRef, () => {
    if (detailsRef.current) {
      detailsRef.current.removeAttribute('open');
    }
  });

  return (
    <div className={styles.wrapper} ref={menuRef}>
      <details ref={detailsRef}>
        <summary className={styles.summary}>{lang}</summary>
        <div className={styles.content}>
          {Object.values(languages).map((language) => {
            return (
              <Link
                key={language}
                className={styles.link}
                href={getPathname(language, pathname)}
              >
                {language}
              </Link>
            );
          })}
        </div>
      </details>
    </div>
  );
}
