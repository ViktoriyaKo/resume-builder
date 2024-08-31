'use client';
import styles from './Header.module.css';
import Link from 'next/link';
import { RoutersType } from '@/types';
import { useParams } from 'next/navigation';
import clsx from 'clsx';
import { CustomLink } from '@/ui/atoms';
import { useSession } from 'next-auth/react';

const HeaderContainer = (props: {
  children: React.ReactNode;
  isDarkHeader: boolean;
}) => {
  const { children, isDarkHeader } = props;

  return (
    <header className={clsx(styles.wrapper, isDarkHeader && styles.dark)}>
      {children}
    </header>
  );
};

const Navigation = (props: { routers: RoutersType }) => {
  const { routers } = props;
  const { lang } = useParams();

  return (
    <nav className={styles.menu}>
      <ul className={styles.menuNav}>
        {routers &&
          routers.length > 0 &&
          routers.map((item) => {
            const { href, title } = item ?? {};
            return (
              <li key={title} className={styles.item}>
                <Link href={`/${lang}${href}`}>{title}</Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

const Logo = () => {
  return <p className={styles.vertical}>Avsievich</p>;
};

const Login = () => {
  const { status } = useSession();
  const { lang } = useParams();
  const isAuthorized = status === 'authenticated';
  const text = isAuthorized ? 'Account' : 'Sign in';
  const path = isAuthorized ? `/${lang}/` : `/${lang}/sign-in`;

  return (
    <CustomLink href={path} className={styles.link} text={text}></CustomLink>
  );
};

const Header = {
  HeaderContainer,
  Logo,
  Login,
  Navigation,
};

export default Header;
