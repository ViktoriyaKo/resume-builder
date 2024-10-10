'use client';
import Image from 'next/image';
import styles from './Card.module.css';
import { type Template } from '@/graphql/gql/graphql';
import { Button } from '@/ui/atoms';
import { MouseEventHandler } from 'react';

interface IProps extends Template {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const Card = (props: IProps) => {
  const { image, title, description, handleClick } = props ?? {};
  const cover = image?.data?.attributes?.url;
  console.log(cover);
  return (
    <Button onClick={handleClick} className={styles.card}>
      <div className={styles.wrapperImage}>
        <Image
          className={styles.image}
          src={cover ?? ''}
          alt={title ?? ''}
          sizes="(max-width: 768px) 70vw, 30vw"
          quality={100}
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
