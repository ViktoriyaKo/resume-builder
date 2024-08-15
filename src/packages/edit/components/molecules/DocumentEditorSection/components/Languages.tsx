import { Categories, FormData } from '@/packages/edit/constants';
import { LANGUAGES_ENTITY } from '@/packages/edit/entities';
import ItemContent from './Content';
import { IDataEditorItems } from '@/packages/edit/types';

const Languages = (props: IDataEditorItems) => {
  const { data, options } = props;

  return (
    <ItemContent
      initialFormData={LANGUAGES_ENTITY}
      value={FormData.LANGUAGES_TITLE}
      header={'Languages'}
      data={data}
      titleAccordion={'Your language'}
      category={Categories.LANGUAGES}
      labelButton={'+ Add one more language'}
      options={options}
    />
  );
};
export default Languages;
