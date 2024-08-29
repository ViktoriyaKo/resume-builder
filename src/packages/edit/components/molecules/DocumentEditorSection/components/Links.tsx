import { Categories, FormData } from '@/packages/edit/constants';
import { LINKS_ENTITY } from '@/packages/edit/entities';
import ItemContent from './Content';
import { IDataEditorItems } from '@/packages/edit/types';
import { useTranslation } from 'react-i18next';

const Links = (props: IDataEditorItems) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <ItemContent
      initialFormData={LINKS_ENTITY}
      value={FormData.LINK_TITLE}
      header={t('linkTitle')}
      description={t('description_links')}
      data={data}
      titleAccordion={t('your_link')}
      category={Categories.LINKS}
      labelButton={`+ ${t('add_link')}`}
    />
  );
};

export default Links;
