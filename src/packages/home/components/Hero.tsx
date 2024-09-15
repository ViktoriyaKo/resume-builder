'use client';
import { CustomLink } from '@/ui/atoms';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';
import background from '@images/background.jpg';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

const Hero = () => {
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          alt={'hero'}
          className={styles.image}
          priority
          sizes="70vw"
          fill
          src={background}
        />
        <div className={styles.filter} />
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{t('header')}</h1>
        <CustomLink
          href={`/${lang}/account`}
          className={styles.link}
          text={t('create_resume')}
        />
      </div>
    </section>
  );
};

export default Hero;
