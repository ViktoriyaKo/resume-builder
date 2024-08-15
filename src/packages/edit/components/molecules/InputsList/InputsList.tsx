'use client';
import { Input, DatePicker, Select, Checkbox } from '@/ui/atoms';
import styles from './InputsList.module.css';

import { Controller, useForm } from 'react-hook-form';
import { TypeFieldData, TypeOptionsData } from '@/packages/edit/types';
import { FormData } from '@/packages/edit/constants';

interface IProps {
  data: TypeFieldData[];
  options?: TypeOptionsData[];
  uuid: string;
  handleClick: ({ name, value }: { name: string; value: string }) => void;
}

const InputsList = (props: IProps) => {
  const { data, options, uuid, handleClick } = props;
  const { control } = useForm();

  return (
    <div className={styles.container}>
      {data?.map((item) => {
        const { caption, type, name } = item;

        return (
          <Controller
            key={caption}
            name={`${uuid}-${name}`}
            defaultValue={''}
            control={control}
            render={({ field }) => {
              const handleChange = (value: string) => {
                field.onChange(value);
                handleClick({ name, value });
              };
              switch (type) {
                case 'textArea':
                  return (
                    <TextEditor
                      label={caption}
                      className={styles.textArea}
                      {...field}
                      onChange={(value) => handleChange(value)}
                    />
                  );
                case 'date':
                  return (
                    <div>
                      <DatePicker
                        key={caption}
                        label={caption}
                        {...field}
                        onChange={(date) =>
                          handleChange(date ? date.toISOString() : '')
                        }
                      />
                      {name === FormData.END_DATE && (
                        // todo не работает исправить!
                        <Checkbox
                          label={'Currently'}
                          {...field}
                          onChange={(e) => handleChange(e.target.value)}
                        />
                      )}
                    </div>
                  );
                case 'select':
                  return (
                    <Select
                      key={caption}
                      label={caption}
                      options={options}
                      className={styles.input}
                      {...field}
                      onChange={(e) => handleChange(e.target.value)}
                    />
                  );
                default:
                  return (
                    <Input
                      key={caption}
                      {...item}
                      className={styles.input}
                      {...field}
                      onChange={(e) => handleChange(e.target.value)}
                    />
                  );
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default InputsList;
