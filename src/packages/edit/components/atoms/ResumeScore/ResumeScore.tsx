import styles from './ResumeScore.module.css';

interface IProps {
  score: number;
}

const ResumeScore = (props: IProps) => {
  const { score } = props;

  return (
    <div>
      <span>Resume Performance Score: </span>
      <span className={styles.score}>{score}%</span>
      <div className={styles.container}>
        <div className={styles.progress} style={{ width: `${score}%` }} />
      </div>
    </div>
  );
};

export default ResumeScore;
