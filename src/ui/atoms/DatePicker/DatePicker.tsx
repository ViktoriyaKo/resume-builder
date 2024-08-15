import { forwardRef, LegacyRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';

interface IProps {
  label?: string;
  value?: Date | null;
  onChange?: (date: Date | null) => void;
}

// eslint-disable-next-line react/display-name
const DataPicker = forwardRef((props: IProps, ref: LegacyRef<DatePicker>) => {
  const { label, value, onChange } = props;

  return (
    <div>
      {label && <label className="form-label d-block">{label}</label>}
      <DatePicker
        selected={value}
        onChange={onChange}
        ref={ref}
        className="form-control"
        dateFormat="MMMM d, yyyy"
      />
    </div>
  );
});

const ControlledDataPicker = (props) => {
  const { control } = useForm();
  const { onChange } = props;

  return (
    <Controller
      control={control}
      name={props.name ?? ''}
      render={({ field }) => {
        return (
          <DatePicker
            {...field}
            {...props}
            onChange={(value) => {
              onChange?.(value);
              field.onChange(value);
            }}
          />
        );
      }}
    />
  );
};

export default ControlledDataPicker;
