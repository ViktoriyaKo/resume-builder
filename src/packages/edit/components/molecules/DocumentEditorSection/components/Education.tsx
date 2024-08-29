import { Categories, FormData } from '@/packages/edit/constants';
import { EDUCATION_ENTITY } from '@/packages/edit/entities';
import ItemContent from './Content';
import { IDataEditorItems } from '@/packages/edit/types';
import { useTranslation } from 'react-i18next';

const Education = (props: IDataEditorItems) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <ItemContent
      initialFormData={EDUCATION_ENTITY}
      value={FormData.EDUCATION_TITLE}
      category={Categories.EDUCATION}
      header={t('educationTitle')}
      description={t('description_education')}
      data={data}
      titleAccordion={t('your_education')}
      labelButton={`+ ${t('add_education')}`}
    />
  );
};

export default Education;
