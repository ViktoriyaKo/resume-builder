import { getStateData } from '@/packages/edit/store/dataSlice';
import { getStateSimpleData } from '@/packages/edit/store/simpleFieldSlice';
import { useSelector } from 'react-redux';
import styles from './Content.module.css';
import React, { useCallback } from 'react';
import { convertFilledContactData } from '../../../utils';
import { TypeFieldData } from '@/packages/edit/types';
import { ExperienceList } from '../atoms';
import iconEducation from '/public/icons/education1.png';
import iconJob from '/public/icons/job1.png';
import { useTranslation } from 'react-i18next';

const Content = () => {
  const { contact, employment, course } = useSelector(getStateData);
  const initialShortData = useSelector(getStateSimpleData);
  const { summary, titles } = initialShortData;
  const { t } = useTranslation();

  const getFilledData = useCallback(
    (data: TypeFieldData[]) => convertFilledContactData(data),
    []
  );
  const headerData = getFilledData(contact);
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
      <ExperienceList
        data={employment}
        title={titles.employment ?? ''}
        icon={iconJob}
      />
      <ExperienceList
        data={course}
        title={titles.course ?? ''}
        icon={iconEducation}
      />
    </div>
  );
};

export default Content;
