import { Categories, ShortCategories } from '@/packages/edit/constants';
import { useHandleFormData } from '@/packages/edit/hooks';
import {
  TypeExpendedData,
  TypeFieldData,
  TypeOptionsData,
} from '@/packages/edit/types';
import { Fragment } from 'react';
import EditableHeader from '../../EditableHeader/EditableHeader';
import EditableAccordion from '../../EditableAccordion/EditableAccordion';
import InputsList from '../../InputsList/InputsList';
import { Button } from '@/ui/atoms';

interface IContentProps {
  value: string;
  category: Categories;
  header: string;
  description?: string;
  data: TypeExpendedData[];
  titleAccordion: string;
  labelButton: string;
  options?: TypeOptionsData[];
  initialFormData: TypeFieldData[];
}

const Content = (props: IContentProps) => {
  const {
    value,
    category,
    header,
    description,
    data,
    titleAccordion,
    labelButton,
    options,
    initialFormData,
  } = props;
  const { addListItem, removeListItem, updateValueField } = useHandleFormData({
    category,
    data: initialFormData,
  });

  return (
    <>
      <EditableHeader
        category={ShortCategories.TITLES}
        name={value}
        title={header}
        description={description}
      />
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          const { uuid, data, values } = item;

          return (
            <Fragment key={uuid}>
              <EditableAccordion
                id={uuid}
                title={`${titleAccordion} #${index + 1}`}
                handleDelete={removeListItem}
              >
                <InputsList
                  uuid={uuid}
                  handleClick={updateValueField}
                  data={data}
                  values={values}
                  options={options}
                  nestedIndex={index}
                  category={category}
                />
              </EditableAccordion>
            </Fragment>
          );
        })}
      <Button onClick={addListItem}>{labelButton}</Button>
    </>
  );
};

export default Content;
