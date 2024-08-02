import { Card } from '@/ui/molecules';
import image from '/public/images/test-template.png';
import styles from '../styles/Templates.module.css';

const Templates = () => {
  const templates = [
    {
      link: '/edit',
      image: image,
      title: 'title1',
      description: 'description',
    },
    {
      link: '/edit',
      image: image,
      title: 'title2',
      description: 'description',
    },
    {
      link: '/edit',
      image: image,
      title: 'title3',
      description: 'description',
    },
  ];

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
