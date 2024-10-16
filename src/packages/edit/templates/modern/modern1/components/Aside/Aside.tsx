import { getStateData } from '@/packages/edit/store/dataSlice';
import { getStateSimpleData } from '@/packages/edit/store/simpleFieldSlice';
import React, { useCallback } from 'react';
import styles from './Aside.module.css';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { TypeFieldData } from '@/packages/edit/types';
import { convertFilledContactData, getDataValuesForm } from '../../../../utils';
import { getLongDateFormat } from '@/utils';
import { LabelValue, Title } from '../atoms';
import { FormData } from '@/packages/edit/constants';
import { useTranslation } from 'react-i18next';

const Aside = () => {
  const initialData = useSelector(getStateData);
  const { t } = useTranslation();

  const { skills, titles, image } = useSelector(getStateSimpleData);
  const { contact, education, links, languages: languagesData } = initialData;

  const getFilledData = useCallback(
    (data: TypeFieldData[]) => convertFilledContactData(data),
    []
  );

  const headerData = getFilledData(contact);

  const { city, country, email, phone } = headerData;
  const shortAddress =
    city && country ? `${city}, ${country}` : city || country;

  const contactLinks = getDataValuesForm(links);
  const languages = getDataValuesForm(languagesData);
  const isEducation = education.some((item) => item.values);

  return (
    <div className={styles.container}>
      {image && (
        <Image
          src={image}
          className={styles.image}
          alt="photo"
          width={120}
          height={120}
          quality={100}
          sizes="(max-width: 768px) 200px, 100vw"
        />
      )}
      <div className={styles.wrapper}>
        {contactLinks.map((item) => {
          const { label, link } = item || {};
          return <LabelValue key={label} label={label} value={link} />;
        })}
        <LabelValue label={'Email:'} value={email} />
        <LabelValue label={`${t('Phone')}:`} value={phone} />
        <LabelValue label={`${t('Address')}:`} value={shortAddress} />
      </div>
      {skills && (
        <div>
          <Title title={t(titles.skills ?? '')} />
          <div
            className={styles.skills}
            dangerouslySetInnerHTML={{
              __html: skills,
            }}
          />
        </div>
      )}
      {isEducation && (
        <div>
          <Title title={t(titles.education ?? '')} />
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
      {languages.length > 0 && (
        <div>
          <Title title={t(titles.languages ?? '')} />
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
