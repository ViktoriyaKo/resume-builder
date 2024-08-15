import { getStateData } from '@/packages/edit/store/dataSlice';
import { getStateShortData } from '@/packages/edit/store/shortFieldSlice';
import { useSelector } from 'react-redux';
import styles from './Content.module.css';
import { getTitles } from '../../../utils';
import React, { useCallback } from 'react';
import { convertFilledContactData } from '../../../utils';
import { TypeFieldData } from '@/packages/edit/types';

const Content = () => {
  const { contactData, ...initialData } = useSelector(getStateData);
  const initialShortData = useSelector(getStateShortData);
  const { skillsDescription, summary, titles: titlesData } = initialShortData;

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
    </div>
  );
};

export default Content;
