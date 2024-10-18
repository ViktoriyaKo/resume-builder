'use client';
import Link from 'next/link';
import styles from '../styles/Blog.module.css';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { TimeLine } from '@/ui/molecules';
import { BlogEntity } from '@/graphql/gql/graphql';
import { getLongDateFormat } from '@/utils';

interface IProps {
  blogItems: BlogEntity[];
}

const Blog = (props: IProps) => {
  const { blogItems } = props;
  const { lang } = useParams();

  return (
    <section className={styles.container}>
      <ul className={styles.wrapperCard}>
        {blogItems &&
          blogItems.length > 0 &&
          blogItems.map((item, index) => {
            const {
              title,
              topic,
              cover,
              author,
              slug,
              publishedAt,
              read_time: readTime,
            } = item?.attributes ?? {};
            const imageUrl = cover?.data?.attributes?.url;
            const date = getLongDateFormat(publishedAt);

            return (
              imageUrl && (
                <li key={`${index}-news`}>
                  <Link href={`/${lang}/blog/${slug}`} className={styles.card}>
                    <div className={styles.imageWrapper}>
                      <Image
                        className={styles.image}
                        src={imageUrl}
                        alt={title ?? ''}
                        sizes="(max-width: 768px) 70vw, 30vw"
                        quality={50}
                        fill
                      />
                      <div className={styles.filter} />
                    </div>
                    <p className={styles.theme}>{topic}</p>
                    <header className={styles.content}>
                      <TimeLine readTime={readTime ?? ''} date={date ?? ''} />
                      <span className={styles.caption}>{author}</span>
                      <p className={styles.title}>{title}</p>
                    </header>
                  </Link>
                </li>
              )
            );
          })}
      </ul>
    </section>
  );
};

export default Blog;
