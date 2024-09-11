'use client';
import Image from 'next/image';
import styles from './Card.module.css';
import { type Template } from '@/graphql/gql/graphql';
import { useParams } from 'next/navigation';
import { Button } from '@/ui/atoms';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

interface IProps extends Template {
  handleClick: () => Promise<string | null | undefined>;
}

const Card = (props: IProps) => {
  const { link, image, title, description, handleClick } = props ?? {};
  const { lang } = useParams();
  const router = useRouter();
  const cover = image?.data?.attributes?.url;

  const handleRedirect = useCallback(async () => {
    const id = await handleClick();
    router.push(`/${lang}/edit/${id}?design=${link}`);
  }, []);

  return (
    <Button onClick={handleRedirect} className={styles.card}>
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
    </Button>
  );
};

export default Card;
