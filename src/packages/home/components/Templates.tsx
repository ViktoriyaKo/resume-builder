import { Card } from '@/ui/molecules';
import styles from '../styles/Templates.module.css';
import { TypeTemplate } from '@/packages/edit/types';

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
    </section>
  );
};

export default Templates;
