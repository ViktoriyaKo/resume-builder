import { getStateData } from '@/packages/edit/store/dataSlice';
import { getStateShortData } from '@/packages/edit/store/shortFieldSlice';
import { useSelector } from 'react-redux';
import styles from './Content.module.css';
import { getTitles } from '../../../utils';
import React, { useCallback } from 'react';
import { convertFilledContactData } from '../../../utils';
import { TypeFieldData } from '@/packages/edit/types';
import { ExperienceList } from '../atoms';

const Content = () => {
  const { contactData, employmentData, courseData } = useSelector(getStateData);
  const initialShortData = useSelector(getStateShortData);
  const { summary, titles: titlesData } = initialShortData;

  const titles = getTitles(titlesData);
  const getFilledData = useCallback(
    (data: TypeFieldData[]) => convertFilledContactData(data),
    []
  );
  const headerData = getFilledData(contactData);
  const { firstName, job, lastName } = headerData;

  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.header}>
          {firstName} {lastName}
        </h1>
        <p className={styles.caption}>{job}</p>
      </header>
      {summary && (
        <div
          dangerouslySetInnerHTML={{
            __html: summary,
          }}
        />
      )}
      <ExperienceList data={employmentData} title={titles.employmentData} />
      <ExperienceList data={courseData} title={titles.courseData} />
    </div>
  );
};

export default Content;
