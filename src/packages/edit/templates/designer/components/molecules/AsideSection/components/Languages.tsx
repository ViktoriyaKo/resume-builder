import { Title } from '../../../atoms';
import styles from '../styles/AsideSection.module.css';
import { Stars } from '@/ui/atoms';
import { Maybe } from '@/graphql/gql/graphql';

interface IProps {
  title: string;
  data: ({ [key: string]: string | undefined } | undefined)[];
  color?: Maybe<string>;
}

const Languages = (props: IProps) => {
  const { title, data, color } = props;

  return (
    data.length > 0 && (
      <div>
        <Title title={title} filled={true} />
        <div className={styles.wrapper}>
          {data.map((item) => {
            const { languagesLevel, languagesName } = item ?? {};

            return (
              languagesLevel && (
                <div key={languagesName}>
                  <p className={styles.label}>{languagesName}</p>
                  <Stars
                    value={languagesLevel}
                    color={color ? color : '#1b779bf4'}
                  />
                </div>
              )
            );
          })}
        </div>
      </div>
    )
  );
};

export default Languages;
