import { Input, TextArea } from '@/ui/atoms';
import styles from './InputsList.module.css';
import DataPicker from '../../atoms/DatePicker/DatePicker';
import Select from '@/ui/atoms/Select/Select';

const InputsList = (props) => {
  const { data, options } = props;

  return (
    <div className={styles.container}>
      {data.map((item) => {
        const { caption, type } = item;
        switch (type) {
          case 'textArea':
            return (
              <TextArea
                key={caption}
                label={caption}
                className={styles.textArea}
              />
            );
          case 'date':
            return <DataPicker key={caption} label={caption} />;
          case 'select':
            return (
              <Select
                key={caption}
                label={caption}
                options={options}
                className={styles.input}
              />
            );
          default:
            return <Input key={caption} {...item} className={styles.input} />;
        }
      })}
    </div>
  );
};

export default InputsList;
