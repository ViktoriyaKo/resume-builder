import Title from '../Title/Title';
import styles from './ExperienceList.module.css';
import { getLongDateFormat } from '@/packages/edit/utils';
import { TypeExpendedData } from '@/packages/edit/types';
import { StaticImageData } from 'next/image';
import { FormData } from '@/packages/edit/constants';

interface IProps {
  data: TypeExpendedData[];
  title: string;
  icon: StaticImageData;
}

const ExperienceList = (props: IProps) => {
  const { data, title, icon } = props;
  const isSection = data.some((item) => item.values);

  return (
    isSection && (
      <div className={styles.wrapper}>
        <Title title={title} icon={icon} />
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

          const organization = employer ?? school;

          const position = job ?? specialty;
          const date =
            startDate &&
            endDate &&
            `${getLongDateFormat(startDate)} - ${
              endDate === FormData.PRESENT
                ? endDate
                : getLongDateFormat(endDate)
            }`;

          return (
            <div key={uuid} className={styles.innerWrapper}>
              {organization && <b>{organization}</b>}
              {position && <p className={styles.position}>{position}</p>}
              {startDate && endDate && <p className={styles.muted}>{date}</p>}
              {city && <p className={styles.muted}>{city}</p>}
              {descriptionSchool && (
                <div
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
