'use client';
import { Card } from '@/ui/molecules';
import styles from '../styles/Templates.module.css';
import { CustomLink } from '@/ui/atoms';
import { Maybe, TemplateEntity } from '@/graphql/gql/graphql';
import { useTranslation } from 'react-i18next';
import { useParams, useRouter } from 'next/navigation';
import { createResumeItem, updateUserResumeData } from '@/services';
import { useCallback } from 'react';
import { useSession } from 'next-auth/react';

interface IProps {
  templates: TemplateEntity[];
}

const Templates = (props: IProps) => {
  const { lang } = useParams();
  const { templates } = props;
  const { t } = useTranslation();
  const router = useRouter();

  const { status } = useSession();
  const isAuthorized = status === 'authenticated';

  const createResume = useCallback(
    async (link?: Maybe<string>) => {
      if (isAuthorized) {
        const data = await createResumeItem();
        const id = data?.id;
        if (id) {
          await updateUserResumeData({ resume_items: id });
          router.push(`/${lang}/edit/${id}?design=${link}`);
        }
      } else {
        router.push(`/${lang}/sign-in`);
      }
    },
    [isAuthorized, lang, router]
  );

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t('choose_templates')}:</h2>
      <div className={styles.wrapper}>
        {templates?.map((item) => {
          const element = item?.attributes ?? {};
          return (
            <Card
              key={element.title}
              {...element}
              handleClick={() => createResume(element?.link)}
            />
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
