import EditableHeader from '../EditableHeader/EditableHeader';
import EditableAccordion from '../EditableAccordion/EditableAccordion';
import InputsList from '../InputsList/InputsList';
import { Fragment } from 'react';
import { Categories, FormData } from '@/packages/edit/constants';
import { useHandleData } from '@/packages/edit/hooks';
import { ControlButton } from '../../atoms';

const EducationDetails = (props) => {
  const { data, control } = props;
  const { addListItem, removeListItem } = useHandleData(Categories.EDUCATION);

  return (
    <>
      <EditableHeader
        value={FormData.EDUCATION_TITLE}
        control={control}
        title="Education"
        description={'Show your Education'}
      />
      {data.map((item) => {
        const [id, inputsList] = item;
        return (
          <Fragment key={id}>
            <EditableAccordion
              title={'[Untitled]'}
              handleDelete={removeListItem}
              id={id}
            >
              <InputsList data={inputsList} />
            </EditableAccordion>
          </Fragment>
        );
      })}
      <ControlButton onClick={addListItem} text={'+ Add one more education'} />
    </>
  );
};

export default EducationDetails;
