import { getStateData } from '@/packages/edit/store/dataSlice';
import { getStateShortData } from '@/packages/edit/store/shortFieldSlice';
import React from 'react';
import styles from './Hero.module.css';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { convertFilledContactData } from '@/packages/edit/utils';
import Link from 'next/link';

const Hero = () => {
  const initialData = useSelector(getStateData);
  const { background } = useSelector(getStateShortData);

  const { contactData, linksData } = initialData;
  const headerData = convertFilledContactData(contactData);
  const contactLinks = linksData
    .map((item) => {
      return item.values;
    })
    .filter((item) => item);

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
    <div
      className={styles.container}
      style={{ backgroundColor: background && background }}
    >
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
            <p>
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
