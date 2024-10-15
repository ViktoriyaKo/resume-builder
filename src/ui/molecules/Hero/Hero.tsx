'use client';
import Image from 'next/image';
import styles from './Hero.module.css';
import background from '@images/frame.svg';
import { useTranslation } from 'react-i18next';

interface IProps {
  title: string;
}

const Hero = (props: IProps) => {
  const { title } = props;
  const { t } = useTranslation();

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
        <h1 className={styles.title}>{t(title)}</h1>
      </header>
    </section>
  );
};

export default Hero;
