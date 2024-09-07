import { Categories, ShortCategories } from '@/packages/edit/constants';
import { TypeExpendedData, TypeOptionsData } from '@/packages/edit/types';
import { Fragment, MouseEvent } from 'react';
import EditableHeader from '../../EditableHeader/EditableHeader';
import EditableAccordion from '../../EditableAccordion/EditableAccordion';
import InputsList from '../../InputsList/InputsList';
import { Button } from '@/ui/atoms';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { removeData } from '@/packages/edit/store/dataSlice';
import { useFieldArray } from 'react-hook-form';

interface IContentProps {
  value: string;
  category: Categories;
  description?: string;
  data: TypeExpendedData[];
  titleAccordion: string;
  labelButton: string;
  options?: TypeOptionsData[];
}

const Content = (props: IContentProps) => {
  const {
    value,
    category,
    description,
    data,
    titleAccordion,
    labelButton,
    options,
  } = props;
  const dispatch = useDispatch();

  const { append, remove } = useFieldArray({
    name: category,
  });

  const handleDelete = (e: MouseEvent<HTMLButtonElement>,
    index: number,
    uuid: string) => {
    e.preventDefault();
    console.log(e);
    remove(index);
    dispatch(removeData({ category, id: uuid }));
  };

  return (
    <>
      <EditableHeader
        category={ShortCategories.TITLES}
        name={value}
        description={description}
      />
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          const { uuid, data } = item;

          return (
            <Fragment key={uuid}>
              <EditableAccordion
                title={`${titleAccordion} #${index + 1}`}
                handleDelete={(e) => handleDelete(e, index, uuid)}
              >
                <InputsList
                  data={data}
                  options={options}
                  nestedIndex={index}
                  category={category}
                />
              </EditableAccordion>
            </Fragment>
          );
        })}
      <Button
        onClick={(e) => {
          e.preventDefault();
          append({ uuid: uuid() });
        }}
      >
        {labelButton}
      </Button>
    </>
  );
};

export default Content;
