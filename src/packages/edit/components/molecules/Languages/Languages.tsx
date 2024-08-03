import { Fragment } from 'react';
import { ControlButton } from '../../atoms';
import EditableAccordion from '../EditableAccordion/EditableAccordion';
import EditableHeader from '../EditableHeader/EditableHeader';
import InputsList from '../InputsList/InputsList';

import { Categories, FormData } from '@/packages/edit/constants';
import { useHandleData } from '@/packages/edit/hooks';

const Languages = (props) => {
  const { data, options, control } = props;
  const { addListItem, removeListItem } = useHandleData(Categories.LANGUAGES);

  return (
    <>
      <EditableHeader
        control={control}
        value={FormData.LANGUAGES_TITLE}
        title="Languages"
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
              <InputsList data={inputsList} options={options} />
            </EditableAccordion>
          </Fragment>
        );
      })}
      <ControlButton onClick={addListItem} text={'+ Add one more language'} />
    </>
  );
};

export default Languages;
