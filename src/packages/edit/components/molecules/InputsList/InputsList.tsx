'use client';
import { Input, TextArea } from '@/ui/atoms';
import styles from './InputsList.module.css';
import DataPicker from '../../atoms/DatePicker/DatePicker';
import Select from '@/ui/atoms/Select/Select';
import { Controller } from 'react-hook-form';
import { useControl } from '@/packages/edit/contexts/ControlContext';
import { TypeFieldData, TypeOptionsData } from '@/packages/edit/types';

interface IProps {
  data: TypeFieldData[];
  options?: TypeOptionsData[];
  uuid: string;
  handleClick: ({ name, value }: { name: string; value: string }) => void;
}

const InputsList = (props: IProps) => {
  const { data, options, uuid, handleClick } = props;
  const control = useControl();

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
                    <TextArea
                      label={caption}
                      className={styles.textArea}
                      {...field}
                      onChange={(e) => handleChange(e.target.value)}
                    />
                  );
                case 'date':
                  return (
                    <DataPicker
                      key={caption}
                      label={caption}
                      {...field}
                      onChange={(date) =>
                        handleChange(date ? date.toISOString() : '')
                      }
                    />
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
