'use client';
import { Form } from '../components';
import styles from '../styles/LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Welcome to Resume Builder</h1>
        <h2 className={styles.description}>
          Avsievich Resume Builder - free way to create resume
        </h2>
        <Form />
      </div>
    </div>
  );
};

export default LoginPage;
