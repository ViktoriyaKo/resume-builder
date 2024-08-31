import clsx from 'clsx';
import styles from './Title.module.css';

interface IProps {
  title: string;
  filled?: boolean;
}

const Title = (props: IProps) => {
  const { title, filled } = props;

  return (
    <h3
      className={clsx(styles.title, filled ? styles.filled : styles.notFilled)}
    >
      {title}
    </h3>
  );
};

export default Title;
