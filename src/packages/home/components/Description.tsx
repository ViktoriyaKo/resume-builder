'use client';
import { Ticker } from '@/ui/atoms';
import styles from '../styles/Description.module.css';
import { useTranslation } from 'react-i18next';


const Description = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
        {t('title_description')}
        </h2>
        <p className={styles.description}>{t('description')}</p>
      </div>
      <Ticker text="Avsievich Resume Builder" />
    </section>
  );
};

export default Description;
