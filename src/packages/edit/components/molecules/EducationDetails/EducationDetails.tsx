import EditableHeader from '../EditableHeader/EditableHeader';
import EditableAccordion from '../EditableAccordion/EditableAccordion';
import InputsList from '../InputsList/InputsList';
import { Fragment } from 'react';
import { Categories, FormData } from '@/packages/edit/constants';
import { useHandleData } from '@/packages/edit/hooks';
import { ControlButton } from '../../atoms';
import { TypeExpendedData } from '@/packages/edit/types/types';

interface IProps {
  data: TypeExpendedData;
}

const EducationDetails = (props: IProps) => {
  const { data } = props;
  const { addListItem, removeListItem } = useHandleData(Categories.EDUCATION);

  return (
    <>
      <EditableHeader
        value={FormData.EDUCATION_TITLE}
        title="Education"
        description={'Show your Education'}
      />
      {data.map((item, index) => {
        const [id, inputsList] = item;
        if (typeof id === 'number') {
          return (
            <Fragment key={id}>
              <EditableAccordion
                title={`Your Education #${index + 1}`}
                handleDelete={removeListItem}
                id={id}
              >
                <InputsList
                  data={inputsList}
                  title={`${FormData.EDUCATION_TITLE}-${id}`}
                />
              </EditableAccordion>
            </Fragment>
          );
        }
      })}
      <ControlButton onClick={addListItem} text={'+ Add one more education'} />
    </>
  );
};

export default EducationDetails;
