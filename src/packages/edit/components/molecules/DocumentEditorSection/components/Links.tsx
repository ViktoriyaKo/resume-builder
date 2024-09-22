import { Categories, FormData, ListLinks } from '@/packages/edit/constants';
import ItemContent from './Content';
import { IDataEditorItems } from '@/packages/edit/types';
import { useTranslation } from 'react-i18next';
import { useFieldArray } from 'react-hook-form';
import { SocialButton } from '../../../atoms';
import { v4 as uuid } from 'uuid';
import styles from '../styles/Links.module.css';

const Links = (props: IDataEditorItems) => {
  const { data } = props;
  const { t } = useTranslation();

  const initialLinks = data.map((item) => {
    return item?.values?.label;
  });

  const { append } = useFieldArray({
    name: Categories.LINKS,
  });

  return (
    <>
      <ItemContent
        value={FormData.LINK_TITLE}
        description={t('description_links')}
        data={data}
        titleAccordion={t('your_link')}
        category={Categories.LINKS}
        labelButton={`+ ${t('add_link')}`}
      />
      <ul className={styles.wrapper}>
        {ListLinks.map((link) => {
          const hasLink = initialLinks && initialLinks?.includes(link);

          return (
            !hasLink && (
              <SocialButton
                key={link}
                handleClick={() => append({ uuid: uuid(), label: link })}
                caption={link}
              />
            )
          );
        })}
      </ul>
    </>
  );
};

export default Links;
