import { LabelValue, Title } from '../../../atoms';
import styles from '../styles/AsideSection.module.css';
import { Stars } from '@/ui/atoms';

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
              languagesLevel && (
                <div>
                  <p className={styles.label}>{languagesName}</p>
                  <Stars value={languagesLevel} color={'#1b779bf4'} />
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
