import styles from './Content.module.css';
import { useSelector } from 'react-redux';
import { getStateSimpleData } from '@/packages/edit/store/simpleFieldSlice';
import ExperienceList from '../ExperienceList/ExperienceList';
import { getStateData } from '@/packages/edit/store/dataSlice';
import Title from '../Title/Title';
import { useTranslation } from 'react-i18next';

const Content = () => {
  const { titles, additionalInfo, skills } = useSelector(getStateSimpleData);

  const { employment, course } = useSelector(getStateData);
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {skills && (
        <div>
          <Title title={t(titles?.skills ?? '')} />
          <div
            className={styles.bold}
            dangerouslySetInnerHTML={{
              __html: skills,
            }}
          />
        </div>
      )}
      <ExperienceList data={employment} title={t(titles?.employment ?? '')} />
      <ExperienceList data={course} title={t(titles?.course ?? '')} />
      {additionalInfo && (
        <div
          dangerouslySetInnerHTML={{
            __html: additionalInfo,
          }}
        />
      )}
    </div>
  );
};

export default Content;
