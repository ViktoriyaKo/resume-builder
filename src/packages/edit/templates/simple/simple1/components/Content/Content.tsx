import { getStateData } from '@/packages/edit/store/dataSlice';
import { getStateSimpleData } from '@/packages/edit/store/simpleFieldSlice';
import { useSelector } from 'react-redux';
import styles from './Content.module.css';

import { Fragment } from 'react';
import { Categories } from '@/packages/edit/constants';
import { getLongDateFormat } from '@/packages/edit/utils';
import { useTranslation } from 'react-i18next';

const Content = () => {
  const { contact, links, ...initialData } = useSelector(getStateData);
  const initialShortData = useSelector(getStateSimpleData);
  const { skills, summary, titles, additionalInfo } = initialShortData;
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {skills && (
        <>
          <h3 className={styles.title}>{t(titles.skills || '')}</h3>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: skills,
            }}
          />
        </>
      )}
      {summary && (
        <>
          <h3 className={styles.title}>{t(titles.summary || '')}</h3>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{
              __html: summary,
            }}
          />
        </>
      )}
      {Object.entries(initialData).map(([key, formData]) => {
        return (
          <Fragment key={key}>
            {formData.map((element, index) => {
              const { uuid, values } = element;
              const {
                job,
                degree,
                specialty,
                employer,
                description,
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
              const title = t(titles[key] as string);

              return values ? (
                <div key={uuid}>
                  {index === 0 && <h3 className={styles.title}>{title}</h3>}
                  {key === Categories.EDUCATION ? (
                    <>
                      <b>{degree}</b>
                      {degree && school && ': '}
                      <span>
                        {school}
                        {school && specialty && `, ${specialty}`}
                        {date && ` · ${date}`}
                      </span>
                      {description && (
                        <div
                          className={styles.description}
                          dangerouslySetInnerHTML={{
                            __html: description,
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
                      {description && (
                        <div
                          className={styles.description}
                          dangerouslySetInnerHTML={{
                            __html: description,
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
      {additionalInfo && (
        <div
          dangerouslySetInnerHTML={{
            __html: additionalInfo,
          }}
        />
      )}
    </div>
  );
};

export default Content;
