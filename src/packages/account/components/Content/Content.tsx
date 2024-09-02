import styles from './Content.module.css';
import { useTranslation } from 'react-i18next';

const Content = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{t('create_resume')}</p>
    </div>
  );
};

export default Content;
