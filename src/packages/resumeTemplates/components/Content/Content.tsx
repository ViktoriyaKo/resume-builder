'use client';

import styles from './Content.module.css';
import Filters from '../Filters/Filters';
import { Card } from '@/ui/molecules';
import { Maybe, TemplateEntity } from '@/graphql/gql/graphql';
import { createResumeItem, updateUserResumeData } from '@/services';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { getUserResume } from '@/packages/account/services';

interface IProps {
  templates: TemplateEntity[];
  allFilters: TemplateEntity[];
}

const Content = (props: IProps) => {
  const { templates, allFilters } = props;
  const { lang } = useParams();
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
    <section className={styles.container}>
      <Filters filters={allFilters} />
      <div className={styles.wrapper}>
        {templates?.map((item) => {
          const element = item?.attributes ?? {};
          return (
            <Card
              handleClick={() => createResume(element?.link)}
              key={element.title}
              {...element}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Content;
