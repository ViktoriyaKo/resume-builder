import EditableHeader from '../EditableHeader/EditableHeader';
import EditableAccordion from '../EditableAccordion/EditableAccordion';
import InputsList from '../InputsList/InputsList';
import AddButton from '../../atoms/AddButton/AddButton';

const LinksDetails = (props) => {
  const { data } = props;

  return (
    <>
      <EditableHeader
        title="Social links & Websites "
        description={
          'You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website'
        }
      />
      <EditableAccordion title={'Untitled'}>
        <InputsList data={data} />
      </EditableAccordion>
      <AddButton text={'Add one more link'} />
    </>
  );
};

export default LinksDetails;
