import { CustomLink } from '@/ui/atoms';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';
import background from '@images/background.jpg';

const Hero = async () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          alt={'hero'}
          className={styles.image}
          priority
          sizes="70vw"
          fill
          src={background}
        />
        <div className={styles.filter} />
      </div>
      <div className={styles.wrapper}>
        <p className={styles.vertical}>Avsievich</p>
        <h1 className={styles.title}>Resume builder</h1>
        <CustomLink
          href={'/edit'}
          className={styles.link}
          text={'Create resume'}
        />
      </div>
    </section>
  );
};

export default Hero;
