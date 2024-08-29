import { FormData, ShortCategories } from '@/packages/edit/constants';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { updateAdditionalField } from '@/packages/edit/store/shortFieldSlice';
import EditableHeader from '../../EditableHeader/EditableHeader';
import { TextEditor } from '@/ui/atoms';
import { useTranslation } from 'react-i18next';

const Summary = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleChange = useCallback((value: string) => {
    dispatch(
      updateAdditionalField({ category: ShortCategories.SUMMARY, value })
    );
  }, []);

  return (
    <>
      <EditableHeader
        category={ShortCategories.TITLES}
        name={FormData.SUMMARY_TITLE}
        title={t('summaryTitle')}
        description={t('description_summary')}
      />
      <TextEditor
        name={ShortCategories.SUMMARY}
        caption={t('advice_summary')}
        onChange={handleChange}
      />
    </>
  );
};

export default Summary;
