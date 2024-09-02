import { Button } from '@/ui/atoms';
import styles from './Aside.module.css';
import { signOut } from 'next-auth/react';
import { useParams } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface IProps {
  image: string;
  name: string;
}

const Aside = (props: IProps) => {
  const { image, name } = props;
  const { lang } = useParams();
  const { t } = useTranslation();

  const buttons = [
    { text: t('documents'), onClick: () => console.log('Documents') },
    { text: t('settings'), onClick: () => console.log('Settings') },
    {
      text: t('sign_out'),
      onClick: () => signOut({ callbackUrl: `/${lang}/` }),
    },
  ];

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
        {buttons.map((item, index) => {
          const { text, onClick } = item;
          return (
            <li
              key={text}
              className={clsx(
                styles.item,
                index === buttons.length - 1 && styles.wrapperButton
              )}
            >
              <Button className={styles.button} onClick={onClick}>
                {text}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Aside;
