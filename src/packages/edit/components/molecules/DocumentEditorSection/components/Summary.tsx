import { FormData, ShortCategories } from '@/packages/edit/constants';
import EditableHeader from '../../EditableHeader/EditableHeader';
import { TextEditor } from '@/ui/atoms';
import { useTranslation } from 'react-i18next';

const Summary = () => {
  const { t } = useTranslation();

  return (
    <>
      <EditableHeader
        category={ShortCategories.TITLES}
        name={FormData.SUMMARY_TITLE}
        description={t('description_summary')}
      />
      <TextEditor
        name={ShortCategories.SUMMARY}
        caption={t('advice_summary')}
      />
    </>
  );
};

export default Summary;
