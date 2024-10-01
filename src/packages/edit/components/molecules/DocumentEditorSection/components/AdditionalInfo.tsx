import { ShortCategories } from '@/packages/edit/constants';
import { TextEditor } from '@/ui/atoms';
import { useTranslation } from 'react-i18next';
import styles from '../styles/EditorItems.module.css';

const AdditionalInfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <h3 className={styles.title}>{t('Additional information')}</h3>
      <TextEditor
        name={ShortCategories.ADDITIONAL}
        caption={t('advice_additional')}
      />
    </>
  );
};

export default AdditionalInfo;
