import EditableAccordion from '../EditableAccordion/EditableAccordion';
import EditableHeader from '../EditableHeader/EditableHeader';
import InputsList from '../InputsList/InputsList';
import { AddButton } from '../../atoms';

const CoursesDetails = (props) => {
  const { data } = props;

  return (
    <>
      <EditableHeader title="Courses" description={'Show your Courses'} />
      <EditableAccordion title={'Untitled'}>
        <InputsList data={data} />
      </EditableAccordion>
      <AddButton text={'Add one more link'} />
    </>
  );
};

export default CoursesDetails;
