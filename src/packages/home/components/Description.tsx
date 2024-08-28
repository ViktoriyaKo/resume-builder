'use client';
import { Ticker } from '@/ui/atoms';
import styles from '../styles/Description.module.css';

const Description = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Create Your Professional Resume Quickly with Our Resume Builder
        </h2>
        <p className={styles.description}>
          Our Online Resume Builder helps you craft impressive resumes in
          minutes, perfect for all job seekers. Choose from a variety of
          customizable templates and easily add your skills, experience, and
          qualifications. The platform guides you through each step, ensuring
          you highlight your strengths effectively.
        </p>
      </div>
      <Ticker text="Avsievich Resume Builder" />
    </section>
  );
};

export default Description;
