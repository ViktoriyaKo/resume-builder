"use client"
import styles from './BottomNavigation.module.css';
import { useParams, usePathname } from 'next/navigation';
import { Icon } from '@/ui/atoms';
import Link from 'next/link';
import clsx from 'clsx';

interface IProps {
  routers: {
    text: string;
    href: string;
    icon: string;
    handleClick?: () => void;
  }[];
}

const BottomNavigation = (props: IProps) => {
  const { routers } = props;
  const { lang } = useParams();
  const pathname = usePathname();

  return (
    <ul className={styles.wrapper}>
      {routers.map((item) => {
        const { text, href, icon, handleClick } = item;
        const path = `/${lang}${item?.href}`;
        const isActive = pathname === path;

        return (
          <li key={text}>
            <Link
              href={href}
              onClick={handleClick && handleClick}
              className={clsx(styles.item, { [styles.active]: isActive })}
            >
              <Icon html={icon} />
              <p>{text}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BottomNavigation;
