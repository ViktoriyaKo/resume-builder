import { Card } from '@/ui/molecules';
import styles from '../styles/Templates.module.css';
import { CustomLink } from '@/ui/atoms';
import { TemplateEntity } from '@/graphql/gql/graphql';

interface IProps {
  templates: TemplateEntity[];
}

const Templates = (props: IProps) => {
  const { templates } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Choose templates:</h2>
      <div className={styles.wrapper}>
        {templates?.map((item) => {
          const element = item?.attributes ?? {};
          return <Card key={element.title} {...element} />;
        })}
      </div>
      <CustomLink
        href={'/resume-templates'}
        className={styles.link}
        text={'See all templates'}
      />
    </section>
  );
};

export default Templates;
