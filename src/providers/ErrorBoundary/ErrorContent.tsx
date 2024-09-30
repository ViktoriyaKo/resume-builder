
import styles from './ErrorBoundary.module.css';

const ErrorContent = () => {

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}> Oops, there is an error!</h1>
    </div>
  );
};

export default ErrorContent;
