import { Button } from '@/ui/atoms';
import styles from './ContainerForm.module.css';
import { ReactNode } from 'react';
import { Icon, GoogleIcon } from '@/ui/atoms';
import { signIn } from 'next-auth/react';
import { useParams } from 'next/navigation';

interface IProps {
  title: string;
  description: string;
  children: ReactNode;
}

const ContainerForm = (props: IProps) => {
  const { title, description, children } = props;
  const { lang } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.description}>{description}</h2>
        {children}
        <div className={styles.separator}>or</div>
        {/* todo вынести наверх signIn либо в отд компонент */}
        <Button
          onClick={() => signIn('google', { callbackUrl: `/${lang}` })}
          className={styles.icon}
        >
          <Icon html={GoogleIcon} />
        </Button>
      </div>
    </div>
  );
};

export default ContainerForm;
