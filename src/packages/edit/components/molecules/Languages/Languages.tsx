import { Fragment } from 'react';
import { ControlButton } from '../../atoms';
import EditableAccordion from '../EditableAccordion/EditableAccordion';
import EditableHeader from '../EditableHeader/EditableHeader';
import InputsList from '../InputsList/InputsList';

import { Categories, FormData } from '@/packages/edit/constants';
import { useHandleData } from '@/packages/edit/hooks';
import { TypeExpendedData } from '@/packages/edit/types/types';

interface IProps {
  data: TypeExpendedData;
  options: { caption: string; value: string }[];
}

const Languages = (props: IProps) => {
  const { data, options } = props;
  const { addListItem, removeListItem } = useHandleData(Categories.LANGUAGES);

  return (
    <>
      <EditableHeader value={FormData.LANGUAGES_TITLE} title="Languages" />
      {data.map((item, index) => {
        const [id, inputsList] = item;
        if (typeof id === 'number') {
          return (
            <Fragment key={id}>
              <EditableAccordion
                title={`Your language #${index + 1}`}
                id={id}
                handleDelete={removeListItem}
              >
                <InputsList
                  data={inputsList}
                  options={options}
                  title={`${FormData.LANGUAGES_TITLE}-${id}`}
                />
              </EditableAccordion>
            </Fragment>
          );
        }
      })}
      <ControlButton onClick={addListItem} text={'+ Add one more language'} />
    </>
  );
};

export default Languages;
