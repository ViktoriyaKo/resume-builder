import { getStateSimpleData } from '@/packages/edit/store/simpleFieldSlice';
import React from 'react';
import styles from './Aside.module.css';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Title from '../Title/Title';
import { getStateInitialFormData } from '@/packages/edit/store/initialFormSlice';

const Aside = () => {
  const { skills, titles, image } = useSelector(getStateSimpleData);
  const { initialFormData } = useSelector(getStateInitialFormData);
  const { contact, links, languages } = initialFormData ?? {};
  const { city, country, email, phone } = contact ?? {};

  const allLinks = links && [
    ...links,
    { label: 'Email', link: email },
    { label: 'Phone', link: phone },
    {
      label: 'Address',
      link: city && country ? `${city}, ${country}` : city || country,
    },
  ];

  return (
    <div className={styles.container}>
      {image && (
        <Image
          src={image}
          className={styles.image}
          alt="photo"
          width={800}
          height={800}
          quality={100}
        />
      )}
      <Title text={titles.personal ?? ""} />
      {/* links */}
      <div className={styles.flex}>
        {allLinks?.map((item) => {
          const { label, link } = item ?? {};

          return (
            link && <div key={link}>
              <p className={styles.bold}>{label}</p>
              <p>{link}</p>
            </div>
          );
        })}
      </div>

      {/*skills */}
      {skills && (
        <div>
          <Title text={titles.skills ?? ""} />
          <div
            dangerouslySetInnerHTML={{
              __html: skills,
            }}
          />
        </div>
      )}

      {/* languages */}
      {languages && languages?.length > 0 && <div className={styles.flex}>
        <Title text={titles.languages ?? ""} />
        {languages.map((item) => {
          const { languagesLevel, languagesName } = item ?? {};
          return (
            <div key={languagesName}>
              <p className={styles.bold}>{languagesName}</p>
              <p>{languagesLevel}</p>
            </div>
          );
        })}
      </div>}
    </div>
  );
};

export default Aside;
