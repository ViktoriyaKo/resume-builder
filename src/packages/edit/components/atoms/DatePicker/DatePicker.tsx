import { forwardRef, LegacyRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

export default DataPicker;
