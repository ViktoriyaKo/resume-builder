'use client';
import { useSelector } from 'react-redux';
import styles from './View.module.css';
import { getFormFilledData } from '@/packages/edit/store/formFilledDataSlice';

// todo разбить на подкомпоненты!!!!!
const View = () => {
  const initialData = useSelector(getFormFilledData);
  const {
    // firstName,
    // lastName,
    // jobTitle,
    // email,
    // phone,
    // country,
    // city,
    // address,
    // summaryTitle,
    // coursesTitle,
    // summary,
    // skillsTitle,
    // languagesTitle,
    // skillsDescription,
    // educationTitle,
    // employmentTitle,
    employments,
    educations,
    courses,
    links,
    languages,
  } = initialData;

  const employmentsArray = Object.values(employments);
  const educationsArray = Object.values(educations);
  const coursesArray = Object.values(courses);
  const linksArray = Object.values(links);
  const languagesArray = Object.values(languages);

  return (
    <div className={styles.container}>
      {/* <div className={styles.list}>
        <div className={styles.headerWrapper}>
          <header>
            <p className={styles.name}>
              {firstName} {lastName}
            </p>
            {jobTitle && <p className={styles.jobTitle}>{jobTitle}</p>}
            <p>
              {country}
              {city && country && ', '}
              {city}
              {address}
            </p>
          </header>
          <div>
            {phone && (
              <p>
                <span className={styles.bold}>Phone: </span>
                {phone}
              </p>
            )}
            {email && (
              <p>
                <span className={styles.bold}>Email: </span>
                {email}
              </p>
            )}
          </div>
        </div>
        {summary && (
          <section>
            <h3 className={styles.title}>{summaryTitle}</h3>
            <p>{summary}</p>
          </section>
        )}
        {skillsDescription && (
          <section>
            <h3 className={styles.title}>{skillsTitle}</h3>
            <ul>
              {skillsDescription.split('\n').map((item, index) => {
                return (
                  <li className={styles.item} key={index}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </section>
        )}
        {educationsArray.length > 0 && (
          <section>
            <h3 className={styles.title}>{educationTitle}</h3>
            {educationsArray.map((item) => {
              const { school, degree, startDate, endDate, specialty } = item;
              return <div key={school}>{school}</div>;
            })}
          </section>
        )}
        {employmentsArray.length > 0 && (
          <section>
            <h3 className={styles.title}>{employmentTitle}</h3>
            {employmentsArray.map((item) => {
              const {
                job,
                employer,
                city,
                startDate,
                endDate,
                specialty,
                descriptionSchool,
              } = item;
              return <div key={job}>{job}</div>;
            })}
          </section>
        )}
        {coursesArray.length > 0 && (
          <section>
            <h3 className={styles.title}>{coursesTitle}</h3>
            {coursesArray.map((item, index) => {
              const {
                school,
                specialty,
                city,
                startDate,
                endDate,
                descriptionSchool,
              } = item;
              return <div key={index}>{school}</div>;
            })}
          </section>
        )}
        {languagesArray.length > 0 && (
          <section>
            <h3 className={styles.title}>{languagesTitle}</h3>
            {languagesArray.map((item, index) => {
              const { languagesName, languagesLevel } = item;
              return <div key={index}>{languagesName}</div>;
            })}
          </section>
        )}
      </div> */}
      <button className={styles.button}>Download PDF</button>
    </div>
  );
};

export default View;
