import { getStateData } from '@/packages/edit/store/dataSlice';
import { getStateShortData } from '@/packages/edit/store/shortFieldSlice';
import React, { useCallback } from 'react';
import styles from './Aside.module.css';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { TypeFieldData } from '@/packages/edit/types';
import { convertFilledContactData, getDataValuesForm } from '../../../../utils';
import { LabelValue, Title } from '../../atoms';
import { useTranslation } from 'react-i18next';
import { CallIcon, EmailIcon, EarthIcon } from '../../atoms/Icons';
import clsx from 'clsx';
import AsideSection from '../../molecules/AsideSection/AsideSection';

const Aside = () => {
  const initialData = useSelector(getStateData);
  const { t } = useTranslation();

  const { skills, titles } = useSelector(getStateShortData);
  const { contact, education, links, languages: languagesData } = initialData;

  const getFilledData = useCallback(
    (data: TypeFieldData[]) => convertFilledContactData(data),
    []
  );

  const headerData = getFilledData(contact);

  const { city, country, email, phone, photo } = headerData;
  const shortAddress =
    city && country ? `${city}, ${country}` : city || country;

  const contactLinks = getDataValuesForm(links);
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
      <Title title={titles.personal ?? ''} filled={true} />
      <div className={clsx(styles.wrapper)}>
        <LabelValue label={'Email'} value={email} icon={EmailIcon} />
        <LabelValue label={'Phone'} value={phone} icon={CallIcon} />
        <LabelValue label={'Address'} value={shortAddress} icon={EarthIcon} />
        {contactLinks.map((item) => {
          const { label, link } = item || {};
          return <LabelValue key={label} label={label} value={link} />;
        })}
      </div>
      <AsideSection.Education title={titles.education ?? ''} data={education} />
      <AsideSection.Skills title={titles.skills ?? ''} description={skills} />
      <AsideSection.Languages title={titles.languages ?? ''} data={languages} />
    </div>
  );
};

export default Aside;
