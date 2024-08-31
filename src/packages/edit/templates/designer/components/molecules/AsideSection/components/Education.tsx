import { TypeExpendedData } from '@/packages/edit/types';
import { Title } from '../../../atoms';
import styles from '../styles/AsideSection.module.css';
import { getLongDateFormat } from '@/packages/edit/utils';
import { FormData } from '@/packages/edit/constants';

interface IProps {
  title: string;
  data: TypeExpendedData[];
}

const Education = (props: IProps) => {
  const { title, data } = props;
  const isEducation = data.some((item) => item.values);

  return (
    isEducation && (
      <div>
        <Title title={title} filled={true} />
        <ul className={styles.education}>
          {data.map((item) => {
            const { uuid, values } = item;
            const {
              degree,
              descriptionSchool,
              specialty,
              startDate,
              endDate,
              school,
            } = values ?? {};

            const date =
              startDate &&
              endDate &&
              `${getLongDateFormat(startDate)} - ${
                endDate === FormData.PRESENT
                  ? endDate
                  : getLongDateFormat(endDate)
              }`;

            return (
              <li key={uuid}>
                <p className={styles.muted}>{date}</p>
                <p className={styles.bold}>{degree}</p>
                <p>
                  {school && specialty
                    ? `${school}, ${specialty}`
                    : specialty || school}
                </p>
                {descriptionSchool && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: descriptionSchool,
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
};

export default Education;
