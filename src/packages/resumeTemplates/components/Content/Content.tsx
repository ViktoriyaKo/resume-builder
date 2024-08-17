import styles from './Content.module.css';
import Filters from '../Filters/Filters';
import { Card } from '@/ui/molecules';
import { templates } from '@/entitis';

const Content = () => {
  return (
    <section className={styles.container}>
      <Filters />
      <div className={styles.wrapper}>
        {templates.map((item) => {
          return <Card key={item.title} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Content;
