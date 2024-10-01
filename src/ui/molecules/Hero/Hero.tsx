"use client"
import Image, { StaticImageData } from 'next/image';
import styles from './Hero.module.css';

interface IProps {
  image: StaticImageData;
  title: string;
}

const Hero = (props: IProps) => {
  const { image, title } = props;

  return (
    <section className={styles.container}>
      <Image
        alt={'background'}
        className={styles.image}
        priority
        sizes="70vw"
        quality={50}
        fill
        src={image}
      />
      <div className={styles.filter} />
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </header>
    </section>
  );
};

export default Hero;
