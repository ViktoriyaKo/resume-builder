import styles from './Spinner.module.css';
import clsx from 'clsx';

const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.spinner, 'spinner-grow')} role="status"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
