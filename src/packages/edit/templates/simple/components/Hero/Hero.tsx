import { getStateData } from '@/packages/edit/store/dataSlice';
import { getStateShortData } from '@/packages/edit/store/shortFieldSlice';
import React, { useCallback } from 'react';
import styles from './Hero.module.css';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { getDataValuesForm, convertFilledContactData } from '../../../utils';
import { TypeFieldData } from '@/packages/edit/types';

const Hero = () => {
  const initialData = useSelector(getStateData);
  const { contactData, linksData } = initialData;

  const getFilledData = useCallback(
    (data: TypeFieldData[]) => convertFilledContactData(data),
    []
  );

  const headerData = getFilledData(contactData);
  const contactLinks = getDataValuesForm(linksData);

  const {
    city,
    country,
    email,
    firstName,
    job,
    lastName,
    phone,
    address,
    photo,
  } = headerData;

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
      <header className={styles.header}>
        <h1 className={styles.bold}>
          {firstName} {lastName}
        </h1>
        <p className={styles.bold}>{job}</p>
        {city && (
          <p>
            {city}
            {country && city ? `, ${country}` : country}
          </p>
        )}
        {address && <p>{address}</p>}
      </header>
      <div className={styles.contacts}>
        {phone && (
          <p>
            <b>Phone:</b> <span className={'text-nowrap'}>{phone}</span>
          </p>
        )}
        {email && (
          <p>
            <b>Email:</b> <span className={'text-nowrap'}>{email}</span>
          </p>
        )}
        {contactLinks.map((item) => {
          const { label, link } = item || {};
          return (
            <p key={label}>
              <b>
                {label}
                {label && ': '}
              </b>
              {link && (
                <Link className={'text-nowrap'} href={link}>
                  {link}
                </Link>
              )}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
