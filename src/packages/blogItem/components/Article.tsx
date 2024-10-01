import styles from '../styles/Article.module.css';

interface IProps {
  content: string;
}

const Article = (props: IProps) => {
  const { content } = props;

  return (
    <article className={styles.article}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
};

export default Article;
