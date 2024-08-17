import { Card } from '@/ui/molecules';
import styles from '../styles/Templates.module.css';
import { TypeTemplate } from '@/packages/edit/types';
import { CustomLink } from '@/ui/atoms';


interface IProps {
  templates: TypeTemplate[];
}

const Templates = (props: IProps) => {
  const { templates } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Choose templates:</h2>
      <div className={styles.wrapper}>
        {templates.map((item) => {
          return <Card key={item.title} {...item} />;
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
