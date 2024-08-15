import { Categories, FormData } from '@/packages/edit/constants';
import { EMPLOYMENT_ENTITY } from '@/packages/edit/entities';
import ItemContent from './Content';
import { IDataEditorItems } from '@/packages/edit/types';

const Employment = (props: IDataEditorItems) => {
  const { data } = props;

  return (
    <ItemContent
      initialFormData={EMPLOYMENT_ENTITY}
      value={FormData.EMPLOYMENT_TITLE}
      category={Categories.EMPLOYMENT}
      header={'Employment History'}
      description={'Show your experience last 10 years'}
      data={data}
      titleAccordion={'Your job'}
      labelButton={'+ Add one more link'}
    />
  );
};

export default Employment;
