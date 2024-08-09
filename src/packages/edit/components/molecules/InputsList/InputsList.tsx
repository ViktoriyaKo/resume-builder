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
  title: string;
}

const InputsList = (props: IProps) => {
  const { data, options, title } = props;
  const control = useControl();

  return (
    <div className={styles.container}>
      {data?.map((item) => {
        const { caption, type, name } = item;

        return (
          <Controller
            key={caption}
            name={`${title}.${name}`}
            defaultValue={''}
            control={control}
            render={({ field }) => {
              switch (type) {
                case 'textArea':
                  return (
                    <TextArea
                      label={caption}
                      className={styles.textArea}
                      {...field}
                    />
                  );
                case 'date':
                  return (
                    <DataPicker key={caption} label={caption} {...field} />
                  );
                case 'select':
                  return (
                    <Select
                      key={caption}
                      label={caption}
                      options={options}
                      className={styles.input}
                      {...field}
                    />
                  );
                default:
                  return (
                    <Input
                      key={caption}
                      {...item}
                      className={styles.input}
                      {...field}
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
