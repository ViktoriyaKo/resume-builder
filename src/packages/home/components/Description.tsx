'use client';
import { Ticker } from '@/ui/atoms';
import styles from '../styles/Description.module.css';
import { useTranslation } from 'react-i18next';

const Description = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{t('title_description')}</h2>
        <p className={styles.description}>{t('description')}</p>
      </div>
      <div className={styles.wrapperInner}>
        <div className={styles.inner}>
        <h2 className={styles.lgTitle}>Get started:</h2>
        <ol className={styles.list}>
          <li>Sign up or log in to the app</li>
          <li>Choose a template or request a custom one</li>
          <li>Add your personal details, experience, and skills</li>
          <li>Download your resume and start applying for jobs!</li>
        </ol>
        </div>
      </div>
      <Ticker text="Avsievich Resume Builder" />
    </section>
  );
};

export default Description;
