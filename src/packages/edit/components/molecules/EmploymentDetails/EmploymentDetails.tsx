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

const EmploymentDetails = (props: IProps) => {
  const { data } = props;
  const { addListItem, removeListItem } = useHandleData(Categories.EMPLOYMENT);

  return (
    <>
      <EditableHeader
        value={FormData.EMPLOYMENT_TITLE}
        title="Employment History"
        description={'Show your experience last 10 years'}
      />
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          const [id, inputsList] = item;
          if (typeof id === 'number') {
            return (
              <Fragment key={id}>
                <EditableAccordion
                  id={id}
                  title={`Your job #${index + 1}`}
                  handleDelete={removeListItem}
                >
                  <InputsList
                    data={inputsList}
                    title={`${FormData.EMPLOYMENT_TITLE}-${id}`}
                  />
                </EditableAccordion>
              </Fragment>
            );
          }
        })}
      <ControlButton onClick={addListItem} text={'+ Add one more link'} />
    </>
  );
};

export default EmploymentDetails;
