import styles from './Footer.module.css';
import Link from 'next/link';

const FooterContainer = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>{children}</div>
    </footer>
  );
};

const Location = () => {
  return (
    <div className={styles.logo}>
      {/* <Image
        alt={'location'}
        src={'/images/location.png'}
        width={25}
        height={25}
      /> */}
      <span>Poland, Krakow</span>
    </div>
  );
};

const Title = (props: { title: string }) => {
  const { title } = props;

  return <div className={styles.blockText}>{title}</div>;
};

const SocialSites = () => {
  return (
    <>
      <Link href={'/'} className={styles.webLink1}>
        Instagram
      </Link>
      <Link href={'/'} className={styles.webLink2}>
        Facebook
      </Link>
    </>
  );
};

const Navigation = (props: { routers: { title: string; href: string }[] }) => {
  const { routers } = props;

  return (
    <nav className={styles.nav}>
      <ul>
        {routers &&
          routers.length > 0 &&
          routers.map((item) => {
            const { title, href } = item ?? {};
            return (
              <li key={title} className={styles.item}>
                <Link href={`/${href}`}>{title}</Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

const Author = () => {
  return (
    <div className={styles.media}>
      <span>Avsievich</span>
      <span>2024</span>
    </div>
  );
};

const Footer = {
  FooterContainer,
  Location,
  Title,
  SocialSites,
  Navigation,
  Author,
};

export default Footer;
