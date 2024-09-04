import styles from './Content.module.css';
import { useTranslation } from 'react-i18next';
import { Icon, AddIcon, Button } from '@/ui/atoms';
import clsx from 'clsx';
import ResumeCard from '../ResumeCard/ResumeCard';
import { createResumeItem, updateUserResumeData } from '../../services';

const Content = () => {
  const cards: any[] = [];
  const { t } = useTranslation();

  const testCreateResume = async () => {
    const data = await createResumeItem();
    const id = data?.id;
    if (id) {
      await updateUserResumeData({ resume_items: id });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <Button
          onClick={testCreateResume}
          className={clsx(styles.empty, styles.card)}
        >
          <>
            <p className={styles.title}>{t('create_resume')}</p>
            <Icon html={AddIcon} />
          </>
        </Button>
        {cards &&
          cards.length > 0 &&
          cards?.map((item) => {
            return <ResumeCard key={item.id} {...item} />;
          })}
      </div>
    </div>
  );
};

export default Content;
