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
  uuid: string;
  category: Categories;
  nestedIndex: number;
  values?: { [key: string]: string | undefined };
  handleClick: ({
    uuid,
    name,
    value,
  }: {
    uuid: string;
    name: string;
    value: string;
  }) => void;
}

const InputsList = (props: IProps) => {
  const { data, options, handleClick, uuid, nestedIndex, category, values } =
    props;
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {data?.map((item) => {
        const { caption, type, name } = item;
        const defaultValue = values && name && values?.[name];
        const uniqueName = `${category}[${nestedIndex}].${name}`;
        const commonProps = {
          name: uniqueName,
          label: t(caption),
          onChange: (e: any) =>
            handleClick({ uuid, name: name ?? '', value: e.target.value }),
        };

        if (type === 'textArea') {
          return (
            <TextEditor
              key={uniqueName}
              {...commonProps}
              className={styles.textArea}
              value={defaultValue}
              onChange={(value) =>
                handleClick({ uuid, name: name ?? '', value })
              }
            />
          );
        }

        if (type === 'date') {
          return (
            <div key={uniqueName}>
              <DatePicker
                withCheckbox={name === FormData.END_DATE}
                {...commonProps}
                onChange={(date: any) => {
                  handleClick({
                    uuid,
                    name: name ?? '',
                    value:
                      date === FormData.PRESENT
                        ? FormData.PRESENT
                        : date
                        ? date.toISOString()
                        : '',
                  });
                }}
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
              defaultValue={defaultValue}
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
