import Image, { StaticImageData } from 'next/image';
import styles from './Title.module.css';

interface IProps {
  title: string;
  icon?: StaticImageData;
}

const Title = (props: IProps) => {
  const { title, icon } = props;
  
  return (
    <div className={styles.titleWrapper}>
     {icon && <Image alt={'icon'} width={20} height={20} src={icon} />}
      <h3 className={styles.title}>{title}</h3>
    </div>)

};

export default Title;
