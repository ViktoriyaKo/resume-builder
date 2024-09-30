import { getStateSimpleData } from '@/packages/edit/store/simpleFieldSlice';
import React from 'react';
import styles from './Aside.module.css';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Title from '../Title/Title';
import { getStateInitialFormData } from '@/packages/edit/store/initialFormSlice';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
// import languagesIcon from '/public/icons/languages4.png';
// import skillsIcon from '/public/icons/skills4.png';
// import personalIcon from '/public/icons/personal4.png';
import { Stars } from '@/ui/atoms';

const Aside = ({ style }: { style: string }) => {
  const {
    skills,
    titles,
    image,
    secondaryColor: color,
  } = useSelector(getStateSimpleData) || {};
  const { initialFormData } = useSelector(getStateInitialFormData) || {};
  const { contact, links, languages } = initialFormData ?? {};
  const { city, country, email, phone } = contact ?? {};
  const { t } = useTranslation();
  const isIcon = style === 'simple3';
  const starColor = color ? color : isIcon ? '#005c85' : '#333333';

  const allLinks = links && [
    ...links,
    { label: 'Email', link: email && email, href: 'mailto:' },
    { label: t('Phone'), link: phone && phone, href: 'tel:' },
    {
      label: t('Address'),
      link: city && country ? `${city}, ${country}` : city || country,
    },
  ];

  return (
    <div className={clsx(styles.container, style ? styles[style] : '')}>
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
      <Title
        title={titles?.personal ?? ''}
        // icon={isIcon && personalIcon}
        style={style}
      />
      {/* links */}
      <div className={styles.flex}>
        {allLinks?.map((item) => {
          const { label, link } = item ?? {};

          return (
            link && (
              <div key={link}>
                <p className={styles.bold}>{label}</p>
                <p>{link}</p>
                {/* {href ? <a href={`${href}${link}`}>{link}</a> : <p>{link}</p>} */}
              </div>
            )
          );
        })}
      </div>

      {/*skills */}
      {skills && (
        <div>
          <Title
            title={titles?.skills ?? ''}
            // icon={isIcon && skillsIcon}
            style={style}
          />
          <div
            className={styles.skills}
            dangerouslySetInnerHTML={{
              __html: skills,
            }}
          />
        </div>
      )}

      {/* languages */}
      {languages && languages?.length > 0 && (
        <div className={styles.flex}>
          <Title
            title={titles?.languages ?? ''}
            // icon={isIcon && languagesIcon}
            style={style}
          />
          {languages?.map((item) => {
            const { languagesLevel, languagesName } = item ?? {};
            return (
              <div key={languagesName}>
                <p className={styles.bold}>{languagesName}</p>
                {/* <p>{languagesLevel}</p> */}
                {languagesLevel && (
                  <Stars value={languagesLevel} color={starColor} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Aside;
