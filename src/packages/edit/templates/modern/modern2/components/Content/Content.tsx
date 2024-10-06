import styles from './Content.module.css';
import { useSelector } from 'react-redux';
import { getStateSimpleData } from '@/packages/edit/store/simpleFieldSlice';
import ExperienceList from '../ExperienceList/ExperienceList';
import { getStateData } from '@/packages/edit/store/dataSlice';
import Title from '../Title/Title';

const Content = () => {
  const { titles, additionalInfo, skills } = useSelector(getStateSimpleData);

  const { employment, course } = useSelector(getStateData);

  return (
    <div className={styles.container}>
      {skills && (
        <div>
          <Title title={titles?.skills ?? ''} />
          <div
            className={styles.bold}
            dangerouslySetInnerHTML={{
              __html: skills,
            }}
          />
        </div>
      )}
      <ExperienceList data={employment} title={titles?.employment ?? ''} />
      <ExperienceList data={course} title={titles?.course ?? ''} />
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
