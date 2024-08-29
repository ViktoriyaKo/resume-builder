import { getStateData } from '@/packages/edit/store/dataSlice';
import { getStateShortData } from '@/packages/edit/store/shortFieldSlice';
import { useSelector } from 'react-redux';
import styles from './Content.module.css';

import { Fragment } from 'react';
import { Categories } from '@/packages/edit/constants';
import { getLongDateFormat } from '@/packages/edit/utils';
import { getTitles } from '../../../utils';
import { useTranslation } from 'react-i18next';

const Content = () => {
  const { contactData, ...initialData } = useSelector(getStateData);
  const initialShortData = useSelector(getStateShortData);
  const { skillsDescription, summary, titles: titlesData } = initialShortData;
  const { t } = useTranslation();
  const titles = getTitles(titlesData, t);

  return (
    <div className={styles.container}>
      {skillsDescription && (
        <>
          <h3 className={styles.title}>{titles.skillsData}</h3>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: skillsDescription,
            }}
          />
        </>
      )}
      {summary && (
        <>
          <h3 className={styles.title}>{t(titles.summaryData)}</h3>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: summary,
            }}
          />
        </>
      )}
      {Object.entries(initialData).map(([key, formData]) => {
        console.log(key);
        return (
          <Fragment key={key}>
            {formData.map((element, index) => {
              const { uuid, values } = element;
              const {
                job,
                degree,
                specialty,
                employer,
                descriptionSchool,
                startDate,
                endDate,
                school,
                city,
                languagesName,
                languagesLevel,
              } = values ?? {};

              const organization = employer || school;
              const position = job || specialty;
              const date =
                startDate &&
                endDate &&
                `${getLongDateFormat(startDate)} - ${
                  endDate === 'Present' ? endDate : getLongDateFormat(endDate)
                }`;

              return values ? (
                <div key={uuid}>
                  {index === 0 && (
                    <h3 className={styles.title}>{titles[key]}</h3>
                  )}
                  {key === Categories.EDUCATION ? (
                    <>
                      <b>{degree}</b>
                      {degree && school && ': '}
                      <span>
                        {school}
                        {school && specialty && `, ${specialty}`}
                        {date && ` · ${date}`}
                      </span>
                      {descriptionSchool && (
                        <div
                          className={styles.description}
                          dangerouslySetInnerHTML={{
                            __html: descriptionSchool,
                          }}
                        />
                      )}
                    </>
                  ) : key === Categories.LANGUAGES ? (
                    <>
                      <p>
                        <b>
                          {languagesName}
                          {languagesLevel && ': '}
                        </b>
                        {languagesLevel}
                      </p>
                    </>
                  ) : (
                    <>
                      <p className={styles.bold}>
                        {organization && <b>{organization}</b>}
                        {organization && position && ', '}
                        {position && <b>{position}</b>}
                      </p>
                      {startDate && endDate && (
                        <p className={styles.muted}>{date}</p>
                      )}
                      {city && <p className={styles.muted}>{city}</p>}
                      {descriptionSchool && (
                        <div
                          className={styles.description}
                          dangerouslySetInnerHTML={{
                            __html: descriptionSchool,
                          }}
                        />
                      )}
                    </>
                  )}
                </div>
              ) : null;
            })}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Content;
