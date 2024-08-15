import { getStateData } from '@/packages/edit/store/dataSlice';
import { getStateShortData } from '@/packages/edit/store/shortFieldSlice';
import React, { useCallback } from 'react';
import styles from './Aside.module.css';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { TypeFieldData } from '@/packages/edit/types';
import {
  convertFilledContactData,
  getDataValuesForm,
  getTitles,
} from '../../../utils';
import { getLongDateFormat } from '@/packages/edit/utils';
import { LabelValue } from '../atoms';

// todo разбить на компоненты!!

const Aside = () => {
  const initialData = useSelector(getStateData);
  const {
    skillsDescription,
    background,
    titles: titlesData,
  } = useSelector(getStateShortData);
  const { contactData, educationData, linksData, languagesData } = initialData;

  const titles = getTitles(titlesData);

  const getFilledData = useCallback(
    (data: TypeFieldData[]) => convertFilledContactData(data),
    []
  );

  const headerData = getFilledData(contactData);
  const { city, country, email, phone, address, photo } = headerData;
  const shortAddress =
    city && country ? `${city}, ${country}` : city || country;

  const contactLinks = getDataValuesForm(linksData);
  const languages = getDataValuesForm(languagesData);

  return (
    <div className={styles.container}>
      {photo && (
        <Image
          src={photo}
          className={styles.image}
          alt="photo"
          width={70}
          height={70}
        />
      )}
      <div className={styles.wrapper}>
        {contactLinks.map((item) => {
          const { label, link } = item || {};
          return <LabelValue key={label} label={label} value={link} />;
        })}
        <LabelValue label={'Email:'} value={email} />
        <LabelValue label={'Phone:'} value={phone} />
        <LabelValue label={'Address:'} value={shortAddress} />
      </div>
      {skillsDescription && (
        <div>
          <h3 className={styles.title}>{titles.skillsData}</h3>
          <div
            className={styles.skills}
            dangerouslySetInnerHTML={{
              __html: skillsDescription,
            }}
          />
        </div>
      )}
      <div>
        <h3 className={styles.title}>{titles.educationData}</h3>
        <ul className={styles.education}>
          {educationData.map((item) => {
            const { uuid, values } = item;
            const {
              degree,
              descriptionSchool,
              specialty,
              startDate,
              endDate,
              school,
            } = values ?? {};
            const date =
              startDate &&
              endDate &&
              `${getLongDateFormat(startDate)} - ${getLongDateFormat(endDate)}`;
            return (
              <li key={uuid}>
                <p className={styles.muted}>{date}</p>
                <p className={styles.bold}>{degree}</p>
                <p>
                  {school}, {specialty}
                </p>
                {descriptionSchool && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: descriptionSchool,
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
      {languages.length > 0 && (
        <div className={styles.wrapper}>
          <h3 className={styles.title}>{titles.languagesData}</h3>
          {languages.map((item) => {
            const { languagesLevel, languagesName } = item || {};
            return (
              <LabelValue
                key={languagesName}
                label={languagesName}
                value={languagesLevel}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Aside;
