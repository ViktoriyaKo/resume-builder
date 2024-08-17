import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.css';
import { TypeTemplate } from '@/packages/edit/types';


const Template = (props: TypeTemplate) => {
  const { link, image, title, description } = props;

  return (
    <Link href={`/edit${link}`} className={styles.card}>
      <div className={styles.wrapperImage}>
        <Image
          className={styles.image}
          src={image}
          alt={title}
          sizes="(max-width: 768px) 70vw, 30vw"
          quality={70}
          fill
        />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.button}>Use this template</div>
    </Link>
  );
};

export default Template;
