import styles from './Spinner.module.css';
import clsx from 'clsx';


interface IProps {
  size?: string;
}


const Spinner = (props: IProps) => {
  const {size = 'bg'} = props;

  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles[size], 'spinner-grow')} role="status"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
