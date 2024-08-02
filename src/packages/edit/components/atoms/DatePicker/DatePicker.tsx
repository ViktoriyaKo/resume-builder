import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface IProps {
  label?: string;
}

const DataPicker = (props: IProps) => {
  const { label } = props;
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div>
      {label && <label className="form-label d-block">{label}</label>}
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        className="form-control"
        dateFormat="MMMM d, yyyy"
      />
    </div>
  );
};

export default DataPicker;
