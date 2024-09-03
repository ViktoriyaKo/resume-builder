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
import { LabelValue, Title } from '../atoms';
import { FormData } from '@/packages/edit/constants';
import { useTranslation } from 'react-i18next';

// todo разбить на компоненты!!

const Aside = () => {
  const initialData = useSelector(getStateData);
  const { t } = useTranslation();

  const { skillsDescription, titles: titlesData } =
    useSelector(getStateShortData);
  const { contactData, educationData, linksData, languagesData } = initialData;

  const titles = getTitles(titlesData, t);

  const getFilledData = useCallback(
    (data: TypeFieldData[]) => convertFilledContactData(data),
    []
  );

  const headerData = getFilledData(contactData);

  const { city, country, email, phone, photo } = headerData;
  const shortAddress =
    city && country ? `${city}, ${country}` : city || country;

  const contactLinks = getDataValuesForm(linksData);
  const languages = getDataValuesForm(languagesData);
  const isEducation = educationData.some((item) => item.values);

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
          <Title title={titles.skillsData} />
          <div
            className={styles.skills}
            dangerouslySetInnerHTML={{
              __html: skillsDescription,
            }}
          />
        </div>
      )}
      {isEducation && (
        <div>
          <Title title={titles.educationData} />
          <ul className={styles.education}>
            {educationData.map((item) => {
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
      {languages.length > 0 && (
        <div>
          <Title title={titles.languagesData} />
          <div className={styles.wrapper}>
            {languages.map((item) => {
              const { languagesLevel, languagesName } = item ?? {};
              return (
                <LabelValue
                  key={languagesName}
                  label={languagesName}
                  value={languagesLevel}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Aside;
