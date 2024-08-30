import styles from './ContainerForm.module.css';
import { ReactNode } from 'react';

interface IProps {
  title: string;
  description: string;
  children: ReactNode;
}

const ContainerForm = (props: IProps) => {
  const { title, description, children } = props;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.description}>{description}</h2>
        {children}
      </div>
    </div>
  );
};

export default ContainerForm;
