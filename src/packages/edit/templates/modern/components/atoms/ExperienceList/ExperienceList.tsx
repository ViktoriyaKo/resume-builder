import Title from '../Title/Title';
import styles from './ExperienceList.module.css';
import { getLongDateFormat } from '@/packages/edit/utils';
import { TypeFieldData } from '@/packages/edit/types';

interface IProps {
  data: TypeFieldData[];
  title: string;
}

const ExperienceList = (props: IProps) => {
  const { data, title } = props;
  const isSection = data.some((item) => item.values);

  return (
    isSection && (
      <div>
        <Title title={title} />
        {data.map((element) => {
          const { uuid, values } = element;
          const {
            job,
            employer,
            school,
            specialty,
            descriptionSchool,
            startDate,
            endDate,
            city,
          } = values ?? {};

          const organization = employer || school;
          const position = job || specialty;
          const date =
            startDate &&
            endDate &&
            `${getLongDateFormat(startDate)} - ${getLongDateFormat(endDate)}`;

          return (
            <div key={uuid}>
              {organization && <b>{organization}</b>}
              {position && <p className={styles.position}>{position}</p>}
              {startDate && endDate && <p className={styles.muted}>{date}</p>}
              {city && <p className={styles.muted}>{city}</p>}
              {descriptionSchool && (
                <div
                  className={styles.description}
                  dangerouslySetInnerHTML={{
                    __html: descriptionSchool,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    )
  );
};

export default ExperienceList;
