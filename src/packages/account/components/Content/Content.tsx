import styles from './Content.module.css';
import { useTranslation } from 'react-i18next';
import { Icon, AddIcon, Button } from '@/ui/atoms';
import clsx from 'clsx';
import ResumeCard from '../ResumeCard/ResumeCard';
import { createResumeItem, updateUserResumeData } from '../../services';
import {
  IdFilterInput,
  InputMaybe,
  ResumeItemFiltersInput,
} from '@/graphql/gql/graphql';
import { useState } from 'react';
import { ModalConfirmation } from '@/ui/organisms';

interface IProps {
  resume: ResumeItemFiltersInput[];
}

const Content = (props: IProps) => {
  const { resume } = props;
  const { t } = useTranslation();
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [resumeToDelete, setResumeToDelete] =
    useState<InputMaybe<IdFilterInput> | null>(null);

  const createResume = async () => {
    const data = await createResumeItem();
    const id = data?.id;
    if (id) {
      await updateUserResumeData({ resume_items: id });
    }
  };

  const confirmDelete = (id?: InputMaybe<IdFilterInput>) => {
    if (id) {
      setOpenConfirmation(true);
      setResumeToDelete(id);
    }
  };

  const deleteResumeFromDB = async () => {
    try {
      if (resumeToDelete !== null) {
        console.log('Deleting resume with ID:', resumeToDelete);
      }
    } catch (error) {
      console.error('Error deleting resume:', error);
    } finally {
      setOpenConfirmation(false);
      setResumeToDelete(null);
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
            return (
              <ResumeCard
                handleDelete={confirmDelete}
                key={String(item.id)}
                {...item}
              />
            );
          })}
      </div>
      <ModalConfirmation
        isOpen={openConfirmation}
        title={'Are you sure you want to delete the resume?'}
        onClose={() => setOpenConfirmation(false)}
        handleClick={deleteResumeFromDB}
      />
    </div>
  );
};

export default Content;
