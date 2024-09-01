import { Button } from '@/ui/atoms';
import styles from './Aside.module.css';
import { signOut } from 'next-auth/react';
import { useParams } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';

interface IProps {
  image: string;
  name: string;
}

const Aside = (props: IProps) => {
  const { image, name} = props;
  const { lang } = useParams();

  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        <Image
          className={styles.image}
          width={60}
          height={60}
          src={image ?? ''}
          alt={'user-photo'}
        />
        <h3>{name}</h3>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Button className={styles.button}>Documents</Button>
        </li>
        <li className={clsx(styles.wrapperButton, styles.item)}>
          <Button className={styles.button} onClick={() => signOut({ callbackUrl: `/${lang}/` })}>
            Sign out
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
