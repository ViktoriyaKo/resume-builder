import EditableHeader from '../EditableHeader/EditableHeader';
import { Input } from '@/ui/atoms';
import styles from './ContactDetails.module.css';
import { ControlButton } from '../../atoms';

import {
  Categories,
  FormData,
  ShortCategories,
} from '@/packages/edit/constants';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { useControl } from '@/packages/edit/contexts/ControlContext';
import { TypeFieldData } from '@/packages/edit/types/types';
import { additionalContactData } from '@/packages/edit/entities';
import { useHandleData } from '@/packages/edit/hooks';

interface IProps {
  data: TypeFieldData[];
}

const ContactDetails = (props: IProps) => {
  const { data } = props;
  const [isToggle, setIsToggle] = useState(true);
  const control = useControl();
  const category = Categories.CONTACT;

  const { addListItem, removeListItem, updateValueField } = useHandleData({
    category,
    data: additionalContactData,
  });

  const toggleDetails = () => {
    if (isToggle) {
      addListItem();
      setIsToggle(false);
    } else {
      removeListItem();
      setIsToggle(true);
    }
  };

  return (
    <>
      <EditableHeader
        category={ShortCategories.TITLES}
        title="Personal Details"
        name={FormData.PERSONAL_TITLE}
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
                const handleChange = (
                  value: string | (EventTarget & HTMLInputElement)
                ) => {
                  if (type === 'file' && value instanceof EventTarget) {
                    if (value?.files) {
                      const blobFile = URL.createObjectURL(value.files?.[0]);
                      field.onChange(value.value);

                      updateValueField({ name, value: blobFile });
                    }
                  } else if (typeof value === 'string') {
                    field.onChange(value);
                    updateValueField({ name, value });
                  }
                };
                return (
                  <Input
                    type={type}
                    caption={caption}
                    {...field}
                    onChange={(e) =>
                      handleChange(type === 'file' ? e.target : e.target.value)
                    }
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
