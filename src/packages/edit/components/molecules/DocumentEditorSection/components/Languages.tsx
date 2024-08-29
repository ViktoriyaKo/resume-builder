import { Categories, FormData } from '@/packages/edit/constants';
import { LANGUAGES_ENTITY } from '@/packages/edit/entities';
import ItemContent from './Content';
import { IDataEditorItems } from '@/packages/edit/types';
import { useTranslation } from 'react-i18next';

const Languages = (props: IDataEditorItems) => {
  const { data, options } = props;
  const { t } = useTranslation();

  return (
    <ItemContent
      initialFormData={LANGUAGES_ENTITY}
      value={FormData.LANGUAGES_TITLE}
      header={t('languagesTitle')}
      data={data}
      titleAccordion={t('your_languages')}
      category={Categories.LANGUAGES}
      labelButton={`+ ${t('add_language')}`}
      options={options}
    />
  );
};
export default Languages;
