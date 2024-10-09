'use client';
import styles from '../styles/AccountPage.module.css';
import { useSession } from 'next-auth/react';
import { Aside, Content } from '../components';
import { useTranslation } from 'react-i18next';
import { ResumeItemFiltersInput } from '@/graphql/gql/graphql';
import {
  BottomNavigation,
  DocumentsIcon,
  HomeIcon,
  SignOutIcon,
} from '@/ui/atoms';
import { handleSignOut } from '@/utils';
import { useParams } from 'next/navigation';
import { Hero } from '@/ui/molecules';

interface IProps {
  resume: ResumeItemFiltersInput[];
}

const ClientAccountPage = (props: IProps) => {
  const { resume } = props;
  const { lang } = useParams();

  const session = useSession();
  const { name, image } = session?.data?.user ?? {};
  const { t } = useTranslation();
  const greeting = `${t('welcome')}${name ? `,\n${name}` : ''}!`;

  const routers = [
    { text: t('Home'), href: `/`, icon: HomeIcon },
    { text: t('documents'), href: `/account`, icon: DocumentsIcon },
    {
      text: t('sign_out'),
      href: '/sign-up',
      handleClick: () => handleSignOut(lang),
      icon: SignOutIcon,
    },
  ];

  return (
    <div className={styles.container}>
      <Hero title={greeting} />
      <div className={styles.wrapper}>
        <Aside name={name ?? 'anonymous'} image={image ?? ''} />
        <Content resume={resume} />
      </div>
      <BottomNavigation routers={routers} />
    </div>
  );
};

export default ClientAccountPage;
