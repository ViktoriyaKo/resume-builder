import EditableHeader from '../EditableHeader/EditableHeader';
import { Input } from '@/ui/atoms';
import styles from './ContactDetails.module.css';
import { ControlButton } from '../../atoms';
import { useDispatch } from 'react-redux';
import { addData, updateValueToData, removeDataItem } from '@/packages/edit/store/dataSlice';
import { Categories, FormData } from '@/packages/edit/constants';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { useControl } from '@/packages/edit/contexts/ControlContext';
import { TypeFieldData } from '@/packages/edit/types/types';
import { additionalContactData } from '@/packages/edit/store/initialFormDataStore';

interface IProps {
  data: TypeFieldData[];
}

const ContactDetails = (props: IProps) => {
  const { data } = props;
  const dispatch = useDispatch();
  const [isToggle, setIsToggle] = useState(true);
  const control = useControl();
  const category = Categories.CONTACT;

  const toggleDetails = () => {
    if (isToggle) {
      dispatch(
        addData({ category, data: additionalContactData })
      );
      setIsToggle(false);
    } else {
      dispatch(removeDataItem({ category }));
      setIsToggle(true);
    }
  };

  return (
    <>
      <EditableHeader
        category={FormData.TITLES}
        title="Personal Details"
        value={FormData.PERSONAL_TITLE}
      />
      <div className={styles.wrapper}>
        {data.map((item) => {
          const { caption, name, type } = item;
          return (
            <Controller
              defaultValue={''}
              control={control}
              name={name}
              key={name}
              render={({ field }) => {
                const handleChange = (value: string) => {
                  field.onChange(value);
                  dispatch(updateValueToData({ category, name, value }));
                };
                return (
                  <Input
                    type={type}
                    caption={caption}
                    {...field}
                    onChange={(e) => handleChange(e.target.value)}
                  />
                );
              }}
            />
          );
        })}
      </div>
      <ControlButton
        onClick={toggleDetails}
        text={`${isToggle ? '▼ Add' : '▲ Hide'} additional details`}
      />
    </>
  );
};

export default ContactDetails;
