'use client';
import { Input, DatePicker, Select, TextEditor } from '@/ui/atoms';
import styles from './InputsList.module.css';
import { useTranslation } from 'react-i18next';
import { TypeFieldData, TypeOptionsData } from '@/packages/edit/types';
import { FormData } from '@/packages/edit/constants';
import { Categories } from '@/packages/edit/constants';

interface IProps {
  data: TypeFieldData[];
  options?: TypeOptionsData[];
  category: Categories;
  nestedIndex: number;
}

const InputsList = (props: IProps) => {
  const { data, options, nestedIndex, category } = props;
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {data?.map((item) => {
        const { caption, type, name } = item;
        const uniqueName = `${category}[${nestedIndex}].${name}`;
        const commonProps = {
          name: uniqueName,
          label: t(caption),
        };

        if (type === 'textArea') {
          return (
            <TextEditor
              key={uniqueName}
              {...commonProps}
              className={styles.textArea}
            />
          );
        }

        if (type === 'date') {
          return (
            <div key={uniqueName}>
              <DatePicker
                withCheckbox={name === FormData.END_DATE}
                {...commonProps}
              />
            </div>
          );
        }
        if (type === 'select') {
          return (
            <Select
              key={uniqueName}
              {...commonProps}
              options={options}
              className={styles.input}
            />
          );
        } else {
          return (
            <Input
              type={type}
              key={uniqueName}
              className={styles.input}
              {...commonProps}
            />
          );
        }
      })}
    </div>
  );
};

export default InputsList;
