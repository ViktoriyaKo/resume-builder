'use client';
import styles from '../styles/Reviews.module.css';
import { ReviewEntity } from '@/graphql/gql/graphql';
import { getLongDateFormat } from '@/packages/edit/utils';
import { Stars } from '@/ui/atoms';

interface IProps {
  reviews: ReviewEntity[];
}

const Reviews = (props: IProps) => {
  const { reviews } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{'Testimonials'}</h2>
      <ul className={styles.wrapper}>
        {reviews?.map((item) => {
          const { user, review, createdAt } = item?.attributes ?? {};
          const date = getLongDateFormat(createdAt);

          return (
            <li key={user} className={styles.item}>
              <p>{user}</p>
              <Stars value={5} isLevel={false} />
              <p className={styles.review}>{review}</p>
              <p className={styles.date}>{date}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Reviews;
