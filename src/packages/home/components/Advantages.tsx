'use client';
import styles from '../styles/Advantages.module.css';
import Image from 'next/image';
import { AdvantageEntity } from '@/graphql/gql/graphql';

interface IProps {
  advantages: AdvantageEntity[];
}

const Advantages = (props: IProps) => {
  const { advantages } = props;

  return (
    <section className={styles.container}>
      <ul className={styles.wrapper}>
        {advantages.map((item) => {
          const { icon, title, description } = item?.attributes ?? {};
          const cover = icon?.data?.attributes?.url;

          return (
            <li key={title} className={styles.item}>
              {/* <Image
                className={styles.image}
                alt={title ?? ''}
                src={cover ?? ''}
                width={60}
                height={60}
              /> */}
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Advantages;
