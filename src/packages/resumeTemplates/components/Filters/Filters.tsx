'use client';
import Link from 'next/link';
import styles from './Filters.module.css';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { TemplateEntity } from '@/graphql/gql/graphql';

interface IProps {
  filters: TemplateEntity[];
}

const Filters = (props: IProps) => {
  const { filters } = props;
  const links = filters.map((item) => item?.attributes?.link);
  const uniqueLinks = Array.from(new Set(links));
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get('filter') ?? 'all';

  return (
    <ul className={styles.wrapper}>
      {['all', ...uniqueLinks].map((item) => {
        return (
          <li key={item}>
            <Link
              className={clsx(styles.item, {
                [styles.active]: currentFilter === item,
              })}
              href={{
                query: { filter: item },
              }}
            >
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
