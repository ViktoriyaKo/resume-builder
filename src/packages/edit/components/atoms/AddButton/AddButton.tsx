import styles from './AddButton.module.css';

interface IProps {
  text: string;
}

const AddButton = (props: IProps) => {
  const { text } = props;
  return <button className={styles.button}>+ {text}</button>;
};

export default AddButton;
