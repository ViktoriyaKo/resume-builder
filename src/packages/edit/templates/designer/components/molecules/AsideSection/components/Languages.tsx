import { LabelValue, Title } from '../../../atoms';
import styles from '../styles/AsideSection.module.css';

interface IProps {
  title: string;
  data: ({ [key: string]: string | undefined } | undefined)[];
}

const Languages = (props: IProps) => {
  const { title, data } = props;

  return (
    data.length > 0 && (
      <div>
        <Title title={title} filled={true} />
        <div className={styles.wrapper}>
          {data.map((item) => {
            const { languagesLevel, languagesName } = item ?? {};
            return (
              <LabelValue
                key={languagesName}
                label={languagesName}
                value={languagesLevel}
              />
            );
          })}
        </div>
      </div>
    )
  );
};

export default Languages;
