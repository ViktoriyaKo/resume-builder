import styles from './Aside.module.css';
import { useSelector } from 'react-redux';
import { getStateSimpleData } from '@/packages/edit/store/simpleFieldSlice';
import { getStateInitialFormData } from '@/packages/edit/store/initialFormSlice';
import { useTranslation } from 'react-i18next';
import { FormData } from '@/packages/edit/constants';
import { getLongDateFormat } from '@/packages/edit/utils';
import { getStateData } from '@/packages/edit/store/dataSlice';
import { Stars } from '@/ui/atoms';
import Title from '../Title/Title';

const Aside = () => {
  const {
    summary,
    titles,
    primaryColor: color,
  } = useSelector(getStateSimpleData);
  const initialData = useSelector(getStateData);
  const { education } = initialData;

  const { initialFormData } = useSelector(getStateInitialFormData) || {};
  const { contact, links, languages } = initialFormData ?? {};
  const { city, country, email, phone } = contact ?? {};
  const { t } = useTranslation();
  const isEducation = education.some((item) => item.values);

  const allLinks = links && [
    { label: 'Email', link: email && email, href: 'mailto:' },
    { label: t('Phone'), link: phone && phone, href: 'tel:' },
    {
      label: t('Address'),
      link: city && country ? `${city}, ${country}` : city || country,
    },
    ...links,
  ];

  return (
    <div>
      {summary && (
        <div
          className={styles.bold}
          dangerouslySetInnerHTML={{
            __html: summary,
          }}
        />
      )}
      <Title title={t(titles?.personal ?? '')} />
      <div className={styles.contacts}>
        {allLinks?.map((item) => {
          const { label, link } = item ?? {};
          return (
            link && (
              <div key={link}>
                <p className={styles.bold}>{label}</p>
                <p>{link}</p>
              </div>
            )
          );
        })}
      </div>
      {isEducation && (
        <div>
          <Title title={t(titles?.education ?? '')} />
          <ul className={styles.education}>
            {education.map((item) => {
              const { uuid, values } = item;
              const {
                degree,
                description,
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
                  {description && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: description,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {/* languages */}
      {languages && languages?.length > 0 && (
        <div className={styles.flex}>
          <Title title={t(titles?.languages ?? '')} />
          {languages?.map((item) => {
            const { languagesLevel, languagesName } = item ?? {};
            return (
              <div key={languagesName}>
                <p className={styles.bold}>{languagesName}</p>
                {languagesLevel && (
                  <Stars value={languagesLevel} color={color} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Aside;
