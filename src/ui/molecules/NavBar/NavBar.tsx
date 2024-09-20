'use client';
import Link from 'next/link';
import styles from './NavBar.module.css';
import { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from '@/hooks';
import { BurgerIcon, Button, SignOutIcon, Icon } from '@/ui/atoms';
import { useParams, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { RoutersType } from '@/types';
import { useSession } from 'next-auth/react';
import { handleSignOut } from '@/utils';

interface IProps {
  pathname: string;
  routers: RoutersType;
}

const NavBar = (props: IProps) => {
  const { routers, pathname } = props;
  const { lang } = useParams();
  const { status } = useSession();
  const router = useRouter();
  const isAuthorized = status === 'authenticated';
  const text = isAuthorized ? 'Sign out' : 'Sign in';
  const account = { href: `/account`, title: 'Account' };
  const updateRouters = isAuthorized ? [...routers, account] : routers;
  const navBar = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOpen] = useState(false);
  useOnClickOutside(navBar, () => setOpen(false));

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className={styles.menuIcon} onClick={() => setOpen(true)}>
        <Icon html={BurgerIcon} />
      </div>
      {isOpen && (
        <nav className={styles.wrapper} ref={navBar}>
          <ul>
            {updateRouters &&
              updateRouters.length > 0 &&
              updateRouters.map((item) => {
                const path = `/${lang}${item?.href}`;
                const isActive = pathname === path;
                return (
                  <li key={item?.title}>
                    <Link
                      className={clsx(styles.item, {
                        [styles.active]: isActive,
                      })}
                      href={path}
                    >
                      {item?.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
          <Button
            className={clsx(styles.item, styles.button)}
            onClick={() =>
              isAuthorized
                ? handleSignOut(lang)
                : router.push(`/${lang}/sign-in`)
            }
          >
            {isAuthorized && <Icon html={SignOutIcon} />}
            {text}
          </Button>
        </nav>
      )}
    </>
  );
};

export default NavBar;
