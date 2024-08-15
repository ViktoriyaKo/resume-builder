import { Categories, FormData } from '@/packages/edit/constants';
import { LINKS_ENTITY } from '@/packages/edit/entities';
import ItemContent from './Content';
import { IDataEditorItems } from '@/packages/edit/types';

const Links = (props: IDataEditorItems) => {
  const { data } = props;

  return (
    <ItemContent
      initialFormData={LINKS_ENTITY}
      value={FormData.LINK_TITLE}
      header={'Social links & Websites'}
      description={
        'You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website'
      }
      data={data}
      titleAccordion={'Your link'}
      category={Categories.LINKS}
      labelButton={'+ Add one more link'}
    />
  );
};

export default Links;
