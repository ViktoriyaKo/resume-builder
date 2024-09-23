import { getStateSimpleData } from '@/packages/edit/store/simpleFieldSlice';
import { useSelector } from 'react-redux';
import styles from './Content.module.css';
import { getStateData } from '@/packages/edit/store/dataSlice';
import ExperienceList from '../ExperienceList/ExperienceList';

const Content = () => {
  const { titles, summary } = useSelector(getStateSimpleData);
  const { employment, course, education } = useSelector(getStateData);

  return (
    <div className={styles.wrapper}>
      {summary && (
        <div
          dangerouslySetInnerHTML={{
            __html: summary,
          }}
        />
      )}
      <ExperienceList data={employment} title={titles.employment ?? ''} />
      <ExperienceList data={education} title={titles.education ?? ''} />
      <ExperienceList data={course} title={titles.course ?? ''} />
    </div>
  );
};

export default Content;
