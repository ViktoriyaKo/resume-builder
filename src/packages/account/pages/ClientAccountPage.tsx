'use client';
import styles from '../styles/AccountPage.module.css';
import { useSession } from 'next-auth/react';
import { Aside, Content } from '../components';
import { useTranslation } from 'react-i18next';

const ClientAccountPage = () => {
  const session = useSession();
  const { name, image } = session?.data?.user ?? {};
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {t('welcome')}, <br />
          {name}!
        </h1>
      </header>
      <div className={styles.wrapper}>
        <Aside name={name ?? 'anonymous'} image={image ?? ''} />
        <Content />
      </div>
    </div>
  );
};

export default ClientAccountPage;
