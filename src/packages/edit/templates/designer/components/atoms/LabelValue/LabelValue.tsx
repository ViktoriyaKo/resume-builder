import { Icon } from '@/ui/atoms';
import styles from './LabelValue.module.css';

interface IProps {
  label?: string;
  value?: string;
  icon?: string;
}

const LabelValue = (props: IProps) => {
  const { label, value, icon } = props;
  return (
    value && (
      <div className={styles.wrapper}>
        {icon && <div className={styles.icon}><Icon html={icon} /></div>}
        <div>
          <p className={styles.label}>{label}</p>
          <p>{value}</p>
        </div>
      </div>
    )
  );
};

export default LabelValue;
