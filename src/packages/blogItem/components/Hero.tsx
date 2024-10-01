import Image from 'next/image';
import styles from '../styles/Hero.module.css';
import { TimeLine } from '@/ui/molecules';
import { Blog } from '@/graphql/gql/graphql';
import { getLongDateFormat } from '@/packages/edit/utils';

interface IProps {
  blog: Blog;
}

const Hero = (props: IProps) => {
  const { blog } = props;
  const {
    title,
    topic,
    cover,
    read_time: readTime,
    author,
    publishedAt,
  } = blog ?? {};
  const icon = cover?.data?.attributes?.url;
  const date = getLongDateFormat(publishedAt);

  return (
    <section className={styles.container}>
      <Image
        alt={topic ?? ''}
        className={styles.image}
        priority
        sizes="70vw"
        quality={50}
        fill
        src={icon || ''}
      />
      <div className={styles.filter} />
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <span className={styles.theme}>{topic}</span>
          <h1 className={styles.title}>{title}</h1>
          <p>{author}</p>
          <TimeLine readTime={readTime ?? ''} date={date ?? ''} />
        </header>
      </div>
    </section>
  );
};

export default Hero;
