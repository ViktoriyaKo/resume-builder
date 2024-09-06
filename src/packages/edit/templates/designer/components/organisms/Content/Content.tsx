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
  const { contact, employment, course } = useSelector(getStateData);
  const initialShortData = useSelector(getStateShortData);
  const { summary, titles: titlesData } = initialShortData;
  const { t } = useTranslation();

  const titles = getTitles(titlesData, t);
  const getFilledData = useCallback(
    (data: TypeFieldData[]) => convertFilledContactData(data),
    []
  );
  const headerData = getFilledData(contact);
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
          <Title title={titles.summary} />
          <div
            dangerouslySetInnerHTML={{
              __html: summary,
            }}
          />
        </div>
      )}
      <ExperienceList data={employment} title={titles.employment} />
      <ExperienceList data={course} title={titles.course} />
    </div>
  );
};

export default Content;
