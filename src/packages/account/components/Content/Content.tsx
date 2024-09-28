import styles from './Content.module.css';
import { useTranslation } from 'react-i18next';
import { Icon, AddIcon, Button } from '@/ui/atoms';
import clsx from 'clsx';
import ResumeCard from '../ResumeCard/ResumeCard';
import {
  IdFilterInput,
  InputMaybe,
  ResumeItemFiltersInput,
} from '@/graphql/gql/graphql';
import { useState } from 'react';
import { ModalConfirmation } from '@/ui/organisms';
import { createResumeItem, updateUserResumeData } from '@/services';
import { useRouter, useParams } from 'next/navigation';

interface IProps {
  resume: ResumeItemFiltersInput[];
}

const Content = (props: IProps) => {
  const { resume } = props;
  const { lang } = useParams();
  const [allResume, setResume] = useState(resume);
  const { t } = useTranslation();
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [resumeToDelete, setResumeToDelete] =
    useState<InputMaybe<IdFilterInput> | null>(null);
  const router = useRouter();

  const createResume = async () => {
    const data = await createResumeItem();
    const id = data?.id;  
     if (id) {
      const newResume = [...allResume.map(item => item.id), id];
      await updateUserResumeData({ resume_items: newResume });
      router.push(`/${lang}/edit/${id}`);
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
        const updateResume = allResume.filter(
          (item) => item.id !== resumeToDelete
        );
        setResume(updateResume);
        await updateUserResumeData({
          resume_items: updateResume.map((item) => item.id),
        });
      }
    } catch (error) {
      console.error('Error deleting resume');
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
        {allResume &&
          allResume.length > 0 &&
          allResume?.map((item, index) => {
            return (
              <ResumeCard
                handleDelete={confirmDelete}
                key={String(item.id)}
                index={index}
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
