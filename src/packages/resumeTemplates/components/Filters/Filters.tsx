'use client';
import Link from 'next/link';
import styles from './Filters.module.css';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';

const Filters = () => {
  // todo перенести фильтры в БД
  const filters = [{ title: 'simple' }, { title: 'modern' }];

  const searchParams = useSearchParams();
  const currentFilter = searchParams.get('filter') ?? 'simple';

  return (
    <ul className={styles.wrapper}>
      {filters.map((item) => {
        const { title } = item;
        return (
          <li key={title}>
            <Link
              className={clsx(styles.item, {
                [styles.active]: currentFilter === title,
              })}
              href={{
                query: { filter: title },
              }}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
