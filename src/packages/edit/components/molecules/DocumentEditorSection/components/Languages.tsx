import { Categories, FormData } from '@/packages/edit/constants';
import ItemContent from './Content';
import { IDataEditorItems } from '@/packages/edit/types';
import { useTranslation } from 'react-i18next';

const Languages = (props: IDataEditorItems) => {
  const { data, options } = props;
  const { t } = useTranslation();

  return (
    <ItemContent
      value={FormData.LANGUAGES_TITLE}
      data={data}
      titleAccordion={t('your_languages')}
      category={Categories.LANGUAGES}
      labelButton={`+ ${t('add_language')}`}
      options={options}
    />
  );
};
export default Languages;
