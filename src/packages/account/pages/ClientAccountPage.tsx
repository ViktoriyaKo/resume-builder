'use client';
import styles from '../styles/AccountPage.module.css';
import { useSession } from 'next-auth/react';
import { Aside, Content } from '../components';
import { useTranslation } from 'react-i18next';
import { ResumeItemFiltersInput } from '@/graphql/gql/graphql';

interface IProps {
  resume: ResumeItemFiltersInput[];
}

const ClientAccountPage = (props: IProps) => {
  const { resume } = props;

  const session = useSession();
  const { name, image } = session?.data?.user ?? {};
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {t('welcome')}{' '}
          {name ? (
            <>
              ,<br />
              {name}
            </>
          ) : (
            ''
          )}
          !
        </h1>
      </header>
      <div className={styles.wrapper}>
        <Aside name={name ?? 'anonymous'} image={image ?? ''} />
        <Content resume={resume} />
      </div>
    </div>
  );
};

export default ClientAccountPage;
