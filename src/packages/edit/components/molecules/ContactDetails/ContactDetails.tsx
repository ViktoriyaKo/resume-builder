import EditableHeader from '../EditableHeader/EditableHeader';
import { Input } from '@/ui/atoms';
import styles from './ContactDetails.module.css';
import { ControlButton } from '../../atoms';
import { useDispatch } from 'react-redux';
import { addData, removeDataItem } from '@/packages/edit/store/dataSlice';
import { Categories, FormData } from '@/packages/edit/constants';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { useControl } from '@/packages/edit/contexts/ControlContext';
import { TypeData } from '@/packages/edit/types/types';

interface IProps {
  data: TypeData[];
}

const ContactDetails = (props: IProps) => {
  const { data } = props;
  const dispatch = useDispatch();
  const [isToggle, setIsToggle] = useState(true);
  const control = useControl();

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
