import styles from './Title.module.css';

interface IProps {
  title: string;
}

const Title = (props: IProps) => {
  const { title } = props;
  return <h3 className={styles.title}>{title}</h3>;
};

export default Title;
