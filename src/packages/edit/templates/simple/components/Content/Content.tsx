import { getStateSimpleData } from '@/packages/edit/store/simpleFieldSlice';
import { useSelector } from 'react-redux';
import styles from './Content.module.css';
import { getStateData } from '@/packages/edit/store/dataSlice';
import ExperienceList from '../ExperienceList/ExperienceList';
import clsx from 'clsx';
import educationIcon from '/public/icons/education4.png';
import jobIcon from '/public/icons/job4.png';
import { useTranslation } from 'react-i18next';

const Content = ({ style }: { style: string }) => {
  const { titles, summary, additionalInfo } = useSelector(getStateSimpleData);
  const { employment, course, education } = useSelector(getStateData);
  const isIcon = style === 'simple3';
  const { t } = useTranslation();

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
        title={t(titles?.employment ?? '')}
        icon={isIcon && jobIcon}
        style={style}
      />
      <ExperienceList
        data={education}
        title={t(titles?.education ?? '')}
        icon={isIcon && educationIcon}
        style={style}
      />
      <ExperienceList
        data={course}
        title={t(titles?.course ?? '')}
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
