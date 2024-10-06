import Image, { StaticImageData } from 'next/image';
import styles from './Title.module.css';
import clsx from 'clsx';

interface IProps {
  title: string;
  icon?: StaticImageData | false;
  style?: string;
}

const Title = (props: IProps) => {
  const { title, icon, style = 'simple2' } = props;
  return (
    <div className={clsx(styles.wrapper, styles[`${style}-wrapper`])}>
      {icon && (
        <Image
          className={styles.image}
          alt={'icon'}
          width={20}
          height={20}
          src={icon}
          sizes='22px'

        />
      )}
      <h3 className={clsx(styles.title, styles[style])}>{title}</h3>
    </div>
  );
};

export default Title;
