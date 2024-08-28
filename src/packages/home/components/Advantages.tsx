import styles from '../styles/Advantages.module.css';
import Image from 'next/image';
import iconEducation from '/public/images/background.jpg';

const Advantages = () => {
  const sections = [
    {
      icon: iconEducation,
      title: 'test test1',
      description: 'Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem ',
    },
    {
      icon: iconEducation,
      title: 'test test2',
      description: 'Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem ',
    },
    {
      icon: iconEducation,
      title: 'test test3',
      description: 'Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem ',
    },
    {
      icon: iconEducation,
      title: 'test test4',
      description: 'Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem ',
    },
    {
      icon: iconEducation,
      title: 'test test5',
      description: 'Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem ',
    },
    {
      icon: iconEducation,
      title: 'test test6',
      description: 'Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem ',
    },
  ];

  return (
    <section className={styles.container}>
      <ul className={styles.wrapper}>
        {sections.map((item) => {
          const { icon, title, description } = item;
          return (
            <li key={title} className={styles.item}>
              <Image
                className={styles.image}
                alt={title}
                src={icon}
                width={60}
                height={60}
              />
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Advantages;
