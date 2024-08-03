import EditableHeader from '../EditableHeader/EditableHeader';
import { Input } from '@/ui/atoms';
import styles from './ContactDetails.module.css';
import { ControlButton } from '../../atoms';
import { useDispatch } from 'react-redux';
import { addData, removeDataItem } from '@/packages/edit/store/dataSlice';
import { Categories, FormData } from '@/packages/edit/constants';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

const ContactDetails = (props) => {
  const { data, control } = props;
  const dispatch = useDispatch();
  const [isToggle, setIsToggle] = useState(true);

  const handleClick = () => {
    if (isToggle) {
      dispatch(addData(Categories.CONTACT));
      setIsToggle(false);
    } else {
      dispatch(removeDataItem({ category: Categories.CONTACT }));
      setIsToggle(true);
    }
  };

  return (
    <>
      <EditableHeader
        control={control}
        title="Personal Details"
        value={FormData.PERSONAL_TITLE}
      />
      <div className={styles.wrapper}>
        {data.map((item) => {
          const { caption, value, type } = item;
          return (
            <Controller
              defaultValue={''}
              control={control}
              name={value}
              key={value}
              render={({ field }) => (
                <Input type={type} caption={caption} {...field} />
              )}
            />
          );
        })}
      </div>
      <ControlButton
        onClick={handleClick}
        text={`${isToggle ? '▼ Add' : '▲ Hide'} additional details`}
      />
    </>
  );
};

export default ContactDetails;
