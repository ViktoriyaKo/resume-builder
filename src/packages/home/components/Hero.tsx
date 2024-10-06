'use client';
import { AwardIcon, CustomLink, Icon, UsersIcon } from '@/ui/atoms';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';
import background from '@images/background.jpg';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';

const Hero = () => {
  const { lang } = useParams();
  const { t } = useTranslation();
  const [isHidden, setIsHidden] = useState(false);

  const mainFeatures = [
    { icon: UsersIcon, text: '40+ Users' },
    { icon: AwardIcon, text: ' #1 Growth Builder 2024' },
  ];

  const handleScroll = useCallback(() => {
    if (window.scrollY > 1000) {
      if (!isHidden) {
        setIsHidden(true);
      }
    } else {
      if (isHidden) {
        setIsHidden(false);
      }
    }
  }, [isHidden]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <section
      className={styles.container}
      style={{ position: isHidden ? 'relative' : 'sticky' }}
    >
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
        <p className={styles.caption}>{t('main_description')}</p>
        <h1 className={styles.title}>{t('header')}</h1>
        <CustomLink
          href={`/${lang}/account`}
          className={styles.link}
          text={t('create_resume')}
        />
        <div className={styles.features}>
          {mainFeatures.map((item) => {
            const { icon, text } = item;
            return (
              <div className={styles.item} key={text}>
                <Icon html={icon} />
                <span>{text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
