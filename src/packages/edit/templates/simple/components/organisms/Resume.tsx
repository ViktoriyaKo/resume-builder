import Content from '../Content/Content';
import Hero from '../Hero/Hero';
import styles from './Resume.module.css';

const Resume = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Content />
    </div>
  );
};

export default Resume;
