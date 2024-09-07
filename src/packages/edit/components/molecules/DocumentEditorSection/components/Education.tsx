import { Categories, FormData } from '@/packages/edit/constants';
import ItemContent from './Content';
import { IDataEditorItems } from '@/packages/edit/types';
import { useTranslation } from 'react-i18next';

const Education = (props: IDataEditorItems) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <ItemContent
      value={FormData.EDUCATION_TITLE}
      category={Categories.EDUCATION}
      description={t('description_education')}
      data={data}
      titleAccordion={t('your_education')}
      labelButton={`+ ${t('add_education')}`}
    />
  );
};

export default Education;
