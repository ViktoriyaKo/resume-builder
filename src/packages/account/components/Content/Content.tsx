import styles from './Content.module.css';
import { useTranslation } from 'react-i18next';
import { Icon, AddIcon, Button } from '@/ui/atoms';
import clsx from 'clsx';
import ResumeCard from '../ResumeCard/ResumeCard';
import { createResumeItem, updateUserResumeData } from '../../services';
import { ResumeItemFiltersInput } from '@/graphql/gql/graphql';

interface IProps {
  resume: ResumeItemFiltersInput[];
}

const Content = (props: IProps) => {
  const { resume } = props;
  const { t } = useTranslation();

  const createResume = async () => {
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
          onClick={createResume}
          className={clsx(styles.empty, styles.card)}
        >
          <>
            <p className={styles.title}>{t('create_resume')}</p>
            <Icon html={AddIcon} />
          </>
        </Button>
        {resume &&
          resume.length > 0 &&
          resume?.map((item) => {
            const { id } = item;
            return <ResumeCard key={String(item.id)} id={id} />;
          })}
      </div>
    </div>
  );
};

export default Content;
