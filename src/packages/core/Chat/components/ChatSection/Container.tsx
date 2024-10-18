import clsx from 'clsx';
import styles from './ChatItems.module.css';

interface IProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Container = (props: IProps) => {
  const { isOpen, children } = props;

  return (
    <section className={clsx(styles.container, { [styles.open]: isOpen })}>
      <div className={styles.wrapper}>{children}</div>
    </section>
  );
};

export default Container;
