'use client';
import { LanguagesType } from '@/types/types';
import styles from '../styles/AccountPage.module.css';
import { useSession } from 'next-auth/react';
import { Aside } from '../components';

const AccountPage = (props: LanguagesType) => {
  const { lang } = props;
  const session = useSession();
  const { name, image } = session?.data?.user ?? {};

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Welcome, <br />
          {name}!
        </h1>
      </header>
      <div className={styles.wrapper}>
        <Aside name={name ?? 'anonymous'} image={image ?? ''} />
      </div>
    </div>
  );
};

export default AccountPage;
