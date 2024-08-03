import EditableHeader from '../EditableHeader/EditableHeader';
import EditableAccordion from '../EditableAccordion/EditableAccordion';
import InputsList from '../InputsList/InputsList';
import { Fragment } from 'react';
import { Categories, FormData } from '@/packages/edit/constants';
import { useHandleData } from '@/packages/edit/hooks';
import { ControlButton } from '../../atoms';

const EmploymentDetails = (props) => {
  const { data, control } = props;
  const { addListItem, removeListItem } = useHandleData(Categories.EMPLOYMENT);

  return (
    <>
      <EditableHeader
        control={control}
        value={FormData.EMPLOYMENT_TITLE}
        title="Employment History"
        description={'Show your experience last 10 years'}
      />
      {data.map((item) => {
        const [id, inputsList] = item;
        return (
          <Fragment key={id}>
            <EditableAccordion
              id={id}
              title={'[Untitled]'}
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

export default EmploymentDetails;
