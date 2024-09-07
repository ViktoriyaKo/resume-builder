import { Categories, FormData } from '@/packages/edit/constants';
import ItemContent from './Content';
import { IDataEditorItems } from '@/packages/edit/types';
import { useTranslation } from 'react-i18next';

const Employment = (props: IDataEditorItems) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <ItemContent
      value={FormData.EMPLOYMENT_TITLE}
      category={Categories.EMPLOYMENT}
      description={t('description_employment')}
      data={data}
      titleAccordion={t('your_job')}
      labelButton={`+ ${t('add_link')}`}
    />
  );
};

export default Employment;
