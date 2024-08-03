import EditableHeader from '../EditableHeader/EditableHeader';
import EditableAccordion from '../EditableAccordion/EditableAccordion';
import InputsList from '../InputsList/InputsList';
import { Fragment } from 'react';
import { Categories, FormData } from '@/packages/edit/constants';
import { useHandleData } from '@/packages/edit/hooks';
import { ControlButton } from '../../atoms';
import { TypeExpendedData } from '@/packages/edit/types/types';

interface IProps {
  data: TypeExpendedData;
}

const LinksDetails = (props: IProps) => {
  const { data } = props;
  const { addListItem, removeListItem } = useHandleData(Categories.LINKS);

  return (
    <>
      <EditableHeader
        value={FormData.LINK_TITLE}
        title="Social links & Websites "
        description={
          'You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website'
        }
      />
      {data.map((item, index) => {
        const [id, inputsList] = item;
        if (typeof id === 'number') {
          return (
            <Fragment key={id}>
              <EditableAccordion
                title={`Your link #${index + 1}`}
                id={id}
                handleDelete={removeListItem}
              >
                <InputsList
                  data={inputsList}
                  title={`${FormData.LINK_TITLE}-${id}`}
                />
              </EditableAccordion>
            </Fragment>
          );
        }
      })}
      <ControlButton onClick={addListItem} text={'+ Add one more link'} />
    </>
  );
};

export default LinksDetails;
