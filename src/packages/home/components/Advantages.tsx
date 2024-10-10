'use client';
import styles from '../styles/Advantages.module.css';
import Image from 'next/image';
import { AdvantageEntity } from '@/graphql/gql/graphql';
import { motion } from 'framer-motion';
import { fadeAnimation } from '@/utils';

interface IProps {
  advantages: AdvantageEntity[];
}

const Advantages = (props: IProps) => {
  const { advantages } = props;

  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
    >
      <ul className={styles.wrapper}>
        {advantages?.map((item, index) => {
          const { icon, title, description } = item?.attributes ?? {};
          const cover = icon?.data?.attributes?.url;

          return (
            <motion.li
              custom={index + 1}
              variants={fadeAnimation}
              key={title}
              className={styles.item}
            >
              <Image
                className={styles.image}
                alt={title ?? ''}
                src={cover ?? ''}
                width={60}
                height={60}
              />
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </motion.li>
          );
        })}
      </ul>
    </motion.section>
  );
};

export default Advantages;
