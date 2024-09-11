'use client';
import { Card } from '@/ui/molecules';
import styles from '../styles/Templates.module.css';
import { CustomLink } from '@/ui/atoms';
import { TemplateEntity } from '@/graphql/gql/graphql';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import { createResumeItem, updateUserResumeData } from '@/services';

interface IProps {
  templates: TemplateEntity[];
}

const Templates = (props: IProps) => {
  const { lang } = useParams();
  const { templates } = props;
  const { t } = useTranslation();

  const createResume = async () => {
    const data = await createResumeItem();
    const id = data?.id;
    if (id) {
      await updateUserResumeData({ resume_items: id });
    }
    return id;
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t('choose_templates')}:</h2>
      <div className={styles.wrapper}>
        {templates?.map((item) => {
          const element = item?.attributes ?? {};
          return (
            <Card key={element.title} {...element} handleClick={createResume} />
          );
        })}
      </div>
      <CustomLink
        href={`/${lang}/resume-templates`}
        className={styles.link}
        text={t('see_templates')}
      />
    </section>
  );
};

export default Templates;
