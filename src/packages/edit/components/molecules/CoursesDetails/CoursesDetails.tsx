import EditableAccordion from '../EditableAccordion/EditableAccordion';
import EditableHeader from '../EditableHeader/EditableHeader';
import InputsList from '../InputsList/InputsList';
import { ControlButton } from '../../atoms';
import { Fragment } from 'react';
import { Categories, FormData } from '@/packages/edit/constants';
import { useHandleData } from '@/packages/edit/hooks';
import { TypeExpendedData } from '@/packages/edit/types/types';

interface IProps {
  data: TypeExpendedData;
}

const CoursesDetails = (props: IProps) => {
  const { data } = props;
  const { addListItem, removeListItem } = useHandleData(Categories.COURSE);

  return (
    <>
      <EditableHeader
        value={FormData.COURSES_TITLE}
        title="Courses"
        description={'Show your Courses'}
      />
      {data.map((item, index) => {
        const [id, inputsList] = item;
        if (typeof id === 'number') {
          return (
            <Fragment key={id}>
              <EditableAccordion
                title={`Your Course #${index + 1}`}
                id={id}
                handleDelete={removeListItem}
              >
                <InputsList
                  data={inputsList}
                  title={`${FormData.COURSES_TITLE}-${id}`}
                />
              </EditableAccordion>
            </Fragment>
          );
        }
      })}
      <ControlButton onClick={addListItem} text={'+ Add one more course'} />
    </>
  );
};

export default CoursesDetails;
