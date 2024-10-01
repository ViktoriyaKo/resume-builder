import { Icon } from '@/ui/atoms';
import styles from './TimeLine.module.css';
import { ClockIcon } from '@/ui/atoms';

interface IProps {
  readTime: string;
  date?: string;
}

const TimeLine = (props: IProps) => {
  const { date, readTime } = props;
  return (
    <div className={styles.wrapper}>
      <span>{date}</span>
      <span className={styles.time}>
        <Icon html={ClockIcon} style={{ width: '15px', height: '15px' }} />
        {readTime}
      </span>
    </div>
  );
};

export default TimeLine;
