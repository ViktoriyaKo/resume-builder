import { Title } from '../../../atoms';
import styles from '../styles/AsideSection.module.css';

interface IProps {
  title: string;
  description: string;
}

const Skills = (props: IProps) => {
  const { title, description } = props;

  return (
    description && (
      <div>
        <Title title={title} filled={true} />
        <div
          className={styles.skills}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    )
  );
};

export default Skills;
