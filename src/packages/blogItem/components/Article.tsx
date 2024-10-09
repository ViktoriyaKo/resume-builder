import styles from '../styles/Article.module.css';
import Image from 'next/image';

interface IProps {
  content: string;
  author: string;
}

const Article = (props: IProps) => {
  const { content, author } = props;
  const photo =
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload/v1727108820/photo_beda219a52.jpg`;

  return (
    <article className={styles.article}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div className={styles.aside}>
        <p className={styles.bold}>Author</p>
        <Image
          src={photo}
          width={120}
          height={120}
          alt={'author'}
          className={styles.image}
        />
        <p className={styles.author}>{author}</p>
      </div>
    </article>
  );
};

export default Article;
