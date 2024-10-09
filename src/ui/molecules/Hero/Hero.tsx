'use client';
import Image, { StaticImageData } from 'next/image';
import styles from './Hero.module.css';
import background from '@images/frame.svg';

interface IProps {
  title: string;
}

const Hero = (props: IProps) => {
  const { title } = props;

  return (
    <section className={styles.container}>
      <Image
        alt={'background'}
        className={styles.image}
        priority
        sizes="200px"
        fill
        src={background}
      />
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </header>
    </section>
  );
};

export default Hero;
