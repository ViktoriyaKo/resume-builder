import { notFound } from 'next/navigation';
import { getPrivacyData } from '../services/getPrivacyData';
import styles from '../styles/Privacy.module.css';
import { LanguagesType } from '@/types/types';

const PrivacyPage = async (props: LanguagesType) => {
  const { lang } = props;
  const data = await getPrivacyData(lang);

  if (!data) {
    notFound();
  }

  const { attributes } = data.pages?.data[0] ?? {};

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{attributes?.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: attributes?.description ?? '',
        }}
      />
    </div>
  );
};

export default PrivacyPage;
