'use client';
import Link from 'next/link';
import styles from './Filters.module.css';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { TemplateEntity } from '@/graphql/gql/graphql';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface IProps {
  filters: TemplateEntity[];
}

const Filters = (props: IProps) => {
  const { t } = useTranslation('common');
  const [isLoaded, setIsLoaded] = useState(false);

  const { filters } = props;
  const links = filters.map((item) => item?.attributes?.link);
  const uniqueLinks = Array.from(new Set(links));
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get('filter') ?? 'all';

  const [ref] = useKeenSlider<HTMLElement>({
    mode: 'free',
    slides: {
      perView: 'auto',
      spacing: 8,
    },
    created() {
      setIsLoaded(true);
    },
  });

  return (
    <ul
      className={clsx(styles.wrapper, 'keen-slider', {
        [styles.hidden]: !isLoaded,
      })}
      ref={ref}
    >
      {['all', ...uniqueLinks].map((item) => {
        return (
          <li key={item}>
            <Link
              className={clsx(styles.item, 'keen-slider__slide', {
                [styles.active]: currentFilter === item,
              })}
              href={{
                query: { filter: item },
              }}
            >
              {item && t(item)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
