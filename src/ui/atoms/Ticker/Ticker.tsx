'use client';
import styles from './Ticker.module.css';

const Ticker = (props: { text: string }) => {
  const { text } = props;

  return (
    <div className={styles.scroll}>
      <div>
        {text} <span className={styles.text}>{text}</span>
      </div>
      <div>
        {text} <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
};

export default Ticker;
