'use client';
import styles from '../styles/Reviews.module.css';
import { ReviewEntity } from '@/graphql/gql/graphql';
import { getLongDateFormat } from '@/packages/edit/utils';
import { Stars } from '@/ui/atoms';
import { ReviewForm } from '.';
import { motion } from 'framer-motion';
import { fadeAnimation } from '@/utils';

interface IProps {
  reviews: ReviewEntity[];
}

const Reviews = (props: IProps) => {
  const { reviews } = props;

  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
    >
      <motion.h2 variants={fadeAnimation} className={styles.title}>
        {'Testimonials'}
      </motion.h2>
      <motion.ul className={styles.wrapper} variants={fadeAnimation} custom={2} >
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
      </motion.ul>
      <ReviewForm title={'Leave your review'} label={'Send'} />
    </motion.section>
  );
};

export default Reviews;
