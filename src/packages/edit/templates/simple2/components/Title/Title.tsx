import styles from './Title.module.css';

interface IProps {
  text: string;
}

const Title = (props: IProps) => {
  const { text } = props;
  return <h3 className={styles.text}>{text}</h3>;
};

export default Title;
