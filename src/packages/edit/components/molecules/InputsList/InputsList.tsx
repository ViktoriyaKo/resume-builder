'use client';
import { Input, DatePicker, Select, TextEditor } from '@/ui/atoms';
import styles from './InputsList.module.css';

import { TypeFieldData, TypeOptionsData } from '@/packages/edit/types';

interface IProps {
  data: TypeFieldData[];
  options?: TypeOptionsData[];
  uuid: string;
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
  const { data, options, handleClick, uuid } = props;

  return (
    <div className={styles.container}>
      {data?.map((item) => {
        const { caption, type, name } = item;
        const uniqueName = `${uuid}-${name}`;

        const commonProps = {
          name: uniqueName,
          label: caption,
          onChange: (e: any) =>
            handleClick({ uuid, name, value: e.target.value }),
        };

        if (type === 'textArea') {
          return (
            <TextEditor
              key={uniqueName}
              {...commonProps}
              className={styles.textArea}
              onChange={(value) => handleClick({ uuid, name, value })}
            />
          );
        }

        if (type === 'date') {
          return (
            <div key={uniqueName}>
              <DatePicker
                {...commonProps}
                onChange={(date: any) =>
                  handleClick({
                    uuid,
                    name,
                    value: date ? date.toISOString() : '',
                  })
                }
              />
              {/* {name === FormData.END_DATE && (
                <Checkbox
                  name={uniqueName}
                  label={'Currently'}
                  onChange={(e) =>
                    handleClick({ uuid, name, value: e.target.value })
                  }
                />
              )} */}
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
              {...item}
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
