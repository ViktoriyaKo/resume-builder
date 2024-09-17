import { Button } from '@/ui/atoms';
import styles from './Aside.module.css';
import { useParams } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import { handleSignOut } from '@/utils';

interface IProps {
  image: string;
  name: string;
}

const Aside = (props: IProps) => {
  const { image, name } = props;
  const { lang } = useParams();
  const { t } = useTranslation();
  const pathname = usePathname();
  const pathParts = pathname.split('/');
  const currentPath = pathParts[2];

  const buttons = [
    { text: t('documents'), href: `account` },
    {
      text: t('sign_out'),
      href: 'sign-up',
      onClick: () => handleSignOut(lang),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        {image && (
          <Image
            className={styles.image}
            width={60}
            height={60}
            src={image}
            quality={100}
            alt={'user-photo'}
          />
        )}
        <h3>{name}</h3>
      </div>
      <ul className={styles.list}>
        {buttons.map((item, index) => {
          const { text, onClick, href } = item;
          const isActive = currentPath === href;

          return (
            <li
              key={text}
              className={clsx(
                styles.item,
                { [styles.active]: isActive },
                index === buttons.length - 1 && styles.wrapperButton
              )}
            >
              <Button className={styles.button} onClick={onClick && onClick}>
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
