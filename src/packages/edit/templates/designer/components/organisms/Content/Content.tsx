import { getStateData } from '@/packages/edit/store/dataSlice';
import { getStateShortData } from '@/packages/edit/store/shortFieldSlice';
import { useSelector } from 'react-redux';
import styles from './Content.module.css';
import { getTitles } from '../../../../utils';
import React, { useCallback } from 'react';
import { convertFilledContactData } from '../../../../utils';
import { TypeFieldData } from '@/packages/edit/types';
import { ExperienceList, Title } from '../../atoms';
import { useTranslation } from 'react-i18next';

const Content = () => {
  const { contactData, employmentData, courseData } = useSelector(getStateData);
  const initialShortData = useSelector(getStateShortData);
  const { summary, titles: titlesData } = initialShortData;
  const { t } = useTranslation();

  const titles = getTitles(titlesData, t);
  const getFilledData = useCallback(
    (data: TypeFieldData[]) => convertFilledContactData(data),
    []
  );
  const headerData = getFilledData(contactData);
  const { firstName, job, lastName } = headerData;

  return (
    <div className={styles.container}>
      <header className={styles.wrapper}>
        <h1 className={styles.header}>
          <span>{firstName}</span>
          <span>{lastName}</span>
        </h1>
        <p className={styles.caption}>{job}</p>
      </header>
      {summary && (
        <div className={styles.summary}>
          <Title title={titles.summaryData} />
          <div
            dangerouslySetInnerHTML={{
              __html: summary,
            }}
          />
        </div>
      )}
      <ExperienceList data={employmentData} title={titles.employmentData} />
      <ExperienceList data={courseData} title={titles.courseData} />
    </div>
  );
};

export default Content;
