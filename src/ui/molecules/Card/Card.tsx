'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.css';
import { type Template } from '@/graphql/gql/graphql';
import { useParams } from 'next/navigation';

const Card = (props: Template) => {
  const { link, image, title, description } = props ?? {};
  const { lang } = useParams();
  const cover = image?.data?.attributes?.url;

  return (
    <Link href={`/${lang}/edit?design=${link}`} className={styles.card}>
      <div className={styles.wrapperImage}>
        <Image
          className={styles.image}
          src={cover ?? ''}
          alt={title ?? ''}
          sizes="(max-width: 768px) 70vw, 30vw"
          quality={70}
          fill
        />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.button}>Use this template</div>
    </Link>
  );
};

export default Card;
