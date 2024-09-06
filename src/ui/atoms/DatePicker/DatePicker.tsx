'use client';
import { forwardRef, LegacyRef, useCallback, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useFormContext } from 'react-hook-form';
import { FormData } from '@/packages/edit/constants';
import { UncontrolledCheckbox as Checkbox } from '@/ui/atoms';

interface IProps {
  label?: string;
  withCheckbox?: boolean;
  defaultValue?: string;
  name: string;
  value?: Date | null;
  isPresent?: boolean;
  onChange?: (date: Date | null | string) => void;
  onPresentChange?: (isPresent: boolean) => void;
}

// eslint-disable-next-line react/display-name
const CustomDataPicker = forwardRef(
  (props: IProps, ref: LegacyRef<DatePicker>) => {
    const { label, value, onChange, isPresent, onPresentChange, withCheckbox } =
      props;
    const handlePresentChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;

        if (onPresentChange) {
          onPresentChange(checked);
        }

        if (checked) {
          onChange?.(FormData.PRESENT);
        } else {
          onChange?.(null);
        }
      },
      []
    );

    return (
      <div>
        {label && <label className="form-label d-block">{label}</label>}
        {isPresent ? (
          <input
            type="text"
            className="form-control"
            value={FormData.PRESENT}
            disabled
          />
        ) : (
          <DatePicker
            selected={!isPresent ? value : null}
            onChange={onChange}
            ref={ref}
            className="form-control"
            dateFormat="MMMM d, yyyy"
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            disabled={isPresent}
          />
        )}
        {withCheckbox && (
          <Checkbox
            name={props.name}
            checked={isPresent}
            label={'Currently'}
            onChange={handlePresentChange}
          />
        )}
      </div>
    );
  }
);

const ControlledDataPicker = (props: IProps) => {
  const { control } = useFormContext();
  const { onChange, defaultValue } = props;
  const initialPresent = defaultValue === 'Present';
  const [isPresent, setIsPresent] = useState<boolean>(initialPresent);

  return (
    <Controller
      defaultValue={defaultValue && defaultValue}
      control={control}
      name={props.name ?? ''}
      render={({ field }) => {
        return (
          <CustomDataPicker
            {...field}
            {...props}
            isPresent={isPresent}
            onPresentChange={(isPresent: boolean) => setIsPresent(isPresent)}
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
