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
  const { image } = useSelector(getStateShortData);
  const { contact, links } = initialData;

  const getFilledData = useCallback(
    (data: TypeFieldData[]) => convertFilledContactData(data),
    []
  );

  const headerData = getFilledData(contact);
  const contactLinks = getDataValuesForm(links);

  const { city, country, email, firstName, job, lastName, phone, address } =
    headerData;

  return (
    <div className={styles.container}>
      {image && (
        <Image
          src={image}
          className={styles.image}
          alt="photo"
          width={100}
          height={100}
          quality={100}
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
