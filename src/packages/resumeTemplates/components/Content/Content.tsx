import styles from './Content.module.css';
import Filters from '../Filters/Filters';
import { Card } from '@/ui/molecules';
import { TemplateEntity } from '@/graphql/gql/graphql';
import { createResumeItem, updateUserResumeData } from '@/services';

interface IProps {
  templates: TemplateEntity[];
  allFilters: TemplateEntity[];
}

const Content = (props: IProps) => {
  const { templates, allFilters } = props;

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
      <Filters filters={allFilters} />
      <div className={styles.wrapper}>
        {templates?.map((item) => {
          const element = item?.attributes ?? {};
          return (
            <Card handleClick={createResume} key={element.title} {...element} />
          );
        })}
      </div>
    </section>
  );
};

export default Content;
