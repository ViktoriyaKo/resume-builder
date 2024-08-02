import EditableHeader from '../EditableHeader/EditableHeader';
import EditableAccordion from '../EditableAccordion/EditableAccordion';
import InputsList from '../InputsList/InputsList';
import AddButton from '../../atoms/AddButton/AddButton';

const EmploymentDetails = (props) => {
  const { data } = props;

  return (
    <>
      <EditableHeader
        title="Employment History"
        description={'Show your experience last 10 years'}
      />
      <EditableAccordion title={'Untitled'}>
        <InputsList data={data} />
      </EditableAccordion>
      <AddButton text={'Add one more link'} />
    </>
  );
};

export default EmploymentDetails;
