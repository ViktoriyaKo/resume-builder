
import styles from './ErrorBoundary.module.css';

const ErrorContent = ({hasError}:{hasError: string}) => {

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}> Oops, there is an error!{hasError.message}</h1>
    </div>
  );
};

export default ErrorContent;
