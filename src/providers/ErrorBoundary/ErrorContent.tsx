import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './ErrorBoundary.module.css';

const ErrorContent = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}> Oops, there is an error!</h1>
      <Link className={styles.link} href='/'>
        <button
          onClick={(e) => {
            e.stopPropagation(), router.reload();
          }}
        >
          Go back to home
        </button>
      </Link>
    </div>
  );
};

export default ErrorContent;
