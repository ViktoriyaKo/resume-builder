import { AddButton } from '../../atoms';
import EditableAccordion from '../EditableAccordion/EditableAccordion';
import EditableHeader from '../EditableHeader/EditableHeader';
import InputsList from '../InputsList/InputsList';

const Languages = (props) => {
  const { data, options } = props;

  return (
    <>
      <EditableHeader title="Languages" />
      <EditableAccordion title={'Untitled'}>
        <InputsList data={data} options={options} />
      </EditableAccordion>
      <AddButton text={'Add one more language'} />
    </>
  );
};

export default Languages;
