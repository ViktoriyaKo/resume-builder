import Image from 'next/image';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';
import { getStateSimpleData } from '@/packages/edit/store/simpleFieldSlice';
import { getStateInitialFormData } from '@/packages/edit/store/initialFormSlice';

const Header = () => {
  const { image } = useSelector(getStateSimpleData);
  const { initialFormData } = useSelector(getStateInitialFormData) || {};
  const { contact } = initialFormData ?? {};
  const { firstName, job, lastName } = contact ?? {};

  return (
    <header>
      <div className={styles.background} />
      <div className={styles.header}>
        {image && (
          <Image
            alt={'photo'}
            className={styles.image}
            src={image}
            width={160}
            height={150}
            sizes='(max-width: 768px) 200px, 100vw'
          />
        )}
        <div className={styles.wrapper}>
          <div className={styles.title}>
            {firstName} <br /> {lastName}
          </div>
          {job && <p className={styles.job}>{job}</p>}
        </div>
      </div>
    </header>
  );
};

export default Header;
