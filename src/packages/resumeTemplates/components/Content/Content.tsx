import styles from './Content.module.css';
import Filters from '../Filters/Filters';
import { Card } from '@/ui/molecules';
import { TemplateEntity } from '@/graphql/gql/graphql';

interface IProps {
  templates: TemplateEntity[];
  allFilters: TemplateEntity[];
}

const Content = (props: IProps) => {
  const { templates, allFilters } = props;
  return (
    <section className={styles.container}>
      <Filters filters={allFilters} />
      <div className={styles.wrapper}>
        {templates?.map((item) => {
          const element = item?.attributes ?? {};
          return <Card key={element.title} {...element} />;
        })}
      </div>
    </section>
  );
};

export default Content;
