import styles from './ExperienceList.module.css';
import { getLongDateFormat } from '@/utils';
import { TypeExpendedData } from '@/packages/edit/types';
import Title from '../Title/Title';
import { FormData } from '@/packages/edit/constants';
import { StaticImageData } from 'next/image';

interface IProps {
  data: TypeExpendedData[];
  icon?: StaticImageData | false;
  style?: string;
  title: string;
}

const ExperienceList = (props: IProps) => {
  const { data, title, icon, style } = props;
  const isSection = data?.some((item) => item?.values);

  return (
    isSection && (
      <div className={styles.wrapper}>
        <Title title={title} style={style} icon={icon} />
        {data?.map((element) => {
          const { uuid, values } = element;
          const {
            job,
            employer,
            school,
            specialty,
            description,
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
            <div key={uuid} className={styles.experience}>
              <div className={styles.date}>{date}</div>

              <div className={styles.content}>
                {position && <p className={styles.title}>{position}</p>}
                {organization && (
                  <p className={styles.italic}>{organization}</p>
                )}
                {city && <p>{city}</p>}
                {description && (
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default ExperienceList;
