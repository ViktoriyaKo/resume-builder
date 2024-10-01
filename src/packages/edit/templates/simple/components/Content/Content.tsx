import { getStateSimpleData } from '@/packages/edit/store/simpleFieldSlice';
import { useSelector } from 'react-redux';
import styles from './Content.module.css';
import { getStateData } from '@/packages/edit/store/dataSlice';
import ExperienceList from '../ExperienceList/ExperienceList';
import clsx from 'clsx';
import educationIcon from '/public/icons/education4.png';
import jobIcon from '/public/icons/job4.png';

const Content = ({ style }: { style: string }) => {
  const { titles, summary, additionalInfo } = useSelector(getStateSimpleData);
  const { employment, course, education } = useSelector(getStateData);
  const isIcon = style === 'simple3';

  return (
    <div className={clsx(styles.wrapper, style ? styles[style] : '')}>
      {summary && (
        <div
          dangerouslySetInnerHTML={{
            __html: summary,
          }}
        />
      )}
      <ExperienceList
        data={employment}
        title={titles?.employment ?? ''}
        icon={isIcon && jobIcon}
        style={style}
      />
      <ExperienceList
        data={education}
        title={titles?.education ?? ''}
        icon={isIcon && educationIcon}
        style={style}
      />
      <ExperienceList
        data={course}
        title={titles?.course ?? ''}
        icon={isIcon && educationIcon}
        style={style}
      />
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
