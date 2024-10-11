'use client';
import { AwardIcon, CustomLink, Icon, UsersIcon } from '@/ui/atoms';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';
import background from '@images/frame.svg';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

const Hero = () => {
  const { lang } = useParams();
  const { t } = useTranslation();

  const mainFeatures = [
    { icon: UsersIcon, text: `40+ ${t('Users')}` },
    { icon: AwardIcon, text: t('award_description') },
  ];

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
        <div className={styles.background} />
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
