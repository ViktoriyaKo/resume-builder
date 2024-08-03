import EditableHeader from '../EditableHeader/EditableHeader';
import EditableAccordion from '../EditableAccordion/EditableAccordion';
import InputsList from '../InputsList/InputsList';
import { Fragment } from 'react';
import { Categories, FormData } from '@/packages/edit/constants';
import { useHandleData } from '@/packages/edit/hooks';
import { ControlButton } from '../../atoms';

const LinksDetails = (props) => {
  const { data, control } = props;
  const { addListItem, removeListItem } = useHandleData(Categories.LINKS);

  return (
    <>
      <EditableHeader
        control={control}
        value={FormData.LINK_TITLE}
        title="Social links & Websites "
        description={
          'You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website'
        }
      />
      {data.map((item) => {
        const [id, inputsList] = item;
        return (
          <Fragment key={id}>
            <EditableAccordion
              title={'[Untitled]'}
              id={id}
              handleDelete={removeListItem}
            >
              <InputsList data={inputsList} />
            </EditableAccordion>
          </Fragment>
        );
      })}
      <ControlButton onClick={addListItem} text={'+ Add one more link'} />
    </>
  );
};

export default LinksDetails;
