import EditableAccordion from '../EditableAccordion/EditableAccordion';
import EditableHeader from '../EditableHeader/EditableHeader';
import InputsList from '../InputsList/InputsList';
import { ControlButton } from '../../atoms';
import { Fragment } from 'react';
import { Categories, FormData } from '@/packages/edit/constants';
import { useHandleData } from '@/packages/edit/hooks';

const CoursesDetails = (props) => {
  const { data, control } = props;
  const { addListItem, removeListItem } = useHandleData(Categories.COURSE);

  return (
    <>
      <EditableHeader
        control={control}
        value={FormData.COURSES_TITLE}
        title="Courses"
        description={'Show your Courses'}
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
      <ControlButton onClick={addListItem} text={'+ Add one more course'} />
    </>
  );
};

export default CoursesDetails;
