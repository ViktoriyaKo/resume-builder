'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './CookieModal.module.css';
import { useParams } from 'next/navigation';
import Cookies from 'js-cookie';

interface Props {
  title: string;
  description: string;
  label: string;
}

const CookieModal = (props: Props) => {
  const { title, description, label } = props;
  const { lang } = useParams();
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    document.cookie = `CONSENT_COOKIE=true; path=/; Max-Age=2592000`;
    setOpen(false);
  };

  function checkCookie() {
    const CONSENT_COOKIE = Cookies.get('CONSENT_COOKIE');
    if (!CONSENT_COOKIE) {
      setOpen(true);
    }
  }

  useEffect(() => {
    checkCookie();
  }, []);

  return (
    isOpen && (
      <div className={styles.wrapper}>
        <span>
          {title}
          {'. '}
          <Link className={styles.link} href={`/${lang}/privacy`}>
            {description}
          </Link>
        </span>
        <button className={styles.button} onClick={handleClick}>
          {label}
        </button>
      </div>
    )
  );
};

export default CookieModal;
