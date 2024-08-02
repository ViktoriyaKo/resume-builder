import EditableHeader from '../EditableHeader/EditableHeader';
import EditableAccordion from '../EditableAccordion/EditableAccordion';
import InputsList from '../InputsList/InputsList';
import AddButton from '../../atoms/AddButton/AddButton';

const EducationDetails = (props) => {
  const { data, options } = props;

  return (
    <>
      <EditableHeader title="Education" description={'Show your Education'} />
      <EditableAccordion title={'Untitled'}>
        <InputsList data={data} />
      </EditableAccordion>
      <AddButton text={'Add one more link'} />
    </>
  );
};

export default EducationDetails;
