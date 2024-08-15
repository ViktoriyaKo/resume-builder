import { Categories, FormData } from '@/packages/edit/constants';
import { EDUCATION_ENTITY } from '@/packages/edit/entities';
import ItemContent from './Content';
import { IDataEditorItems } from '@/packages/edit/types';

const Education = (props: IDataEditorItems) => {
  const { data } = props;

  return (
    <ItemContent
      initialFormData={EDUCATION_ENTITY}
      value={FormData.EDUCATION_TITLE}
      category={Categories.EDUCATION}
      header={'Education'}
      description={'Show your Education'}
      data={data}
      titleAccordion={'Your Education'}
      labelButton={'+ Add one more education'}
    />
  );
};

export default Education;
