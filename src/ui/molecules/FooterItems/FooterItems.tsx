'use client';
import styles from './Footer.module.css';
import Link from 'next/link';
import { useParams } from 'next/navigation';

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
  const { lang } = useParams();

  return (
    <nav className={styles.nav}>
      <ul>
        {routers &&
          routers.length > 0 &&
          routers.map((item) => {
            const { title, href } = item ?? {};
            return (
              <li key={title} className={styles.item}>
                <Link href={`/${lang}/${href}`}>{title}</Link>
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
      <Link href={'https://www.avsievich.eu'}>Avsievich Marketing Agency</Link>
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
