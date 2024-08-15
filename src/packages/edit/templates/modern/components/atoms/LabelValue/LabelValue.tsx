import styles from './LabelValue.module.css';

interface IProps {
  label?: string;
  value?: string;
}

const LabelValue = (props: IProps) => {
  const { label, value } = props;
  return (
    value && (
      <div>
        <p className={styles.label}>{label}</p>
        <p>{value}</p>
      </div>
    )
  );
};

export default LabelValue;
