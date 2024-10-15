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
import { getUserResume } from '@/packages/account/services';
import { motion } from 'framer-motion';
import { fadeAnimation } from '@/utils';

interface IProps {
  templates: TemplateEntity[];
}

const Templates = (props: IProps) => {
  const { lang } = useParams();
  const { t } = useTranslation();
  const { templates } = props;
  const router = useRouter();

  const { status } = useSession();
  const isAuthorized = status === 'authenticated';

  const createResume = useCallback(
    async (link?: Maybe<string>) => {
      if (isAuthorized) {
        const data = await createResumeItem();
        const id = data?.id;
        if (id) {
          const data = await getUserResume();
          const newResume = [...data.map((item: any) => item?.id), id];
          await updateUserResumeData({ resume_items: newResume });
          router.push(`/${lang}/edit/${id}?design=${link}`);
        }
      } else {
        router.push(`/${lang}/sign-in`);
      }
    },
    [isAuthorized, lang, router]
  );

  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
    >
      <motion.h2 variants={fadeAnimation} className={styles.title}>
        {t('choose_templates')}:
      </motion.h2>
      <motion.div
        variants={fadeAnimation}
        custom={2}
        className={styles.wrapper}
      >
        {templates?.map((item) => {
          const element = item?.attributes ?? {};
          return (
            <Card
              key={element.title}
              {...element}
              handleClick={() => createResume(element?.slug)}
            />
          );
        })}
      </motion.div>
      <CustomLink
        href={`/${lang}/resume-templates`}
        className={styles.link}
        text={t('see_templates')}
      />
    </motion.section>
  );
};

export default Templates;
