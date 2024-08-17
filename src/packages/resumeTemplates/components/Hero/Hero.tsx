import Image from 'next/image';
import styles from './Hero.module.css';
import background from '@images/background-templates.jpg';

const Hero = () => {
  return (
    <section className={styles.container}>
      <Image
        alt={'background'}
        className={styles.image}
        priority
        sizes="70vw"
        quality={50}
        fill
        src={background}
      />
      <div className={styles.filter} />
      <header className={styles.header}>
        <h1 className={styles.title}>Templates</h1>
      </header>
    </section>
  );
};

export default Hero;
