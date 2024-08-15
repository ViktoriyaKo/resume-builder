import EditableHeader from '../EditableHeader/EditableHeader';
import styles from './ContactDetails.module.css';

import {
  Categories,
  FormData,
  ShortCategories,
} from '@/packages/edit/constants';
import { useCallback, useState } from 'react';
import { TypeFieldData } from '@/packages/edit/types/types';
import { additionalContactData } from '@/packages/edit/entities';
import { useHandleFormData } from '@/packages/edit/hooks';
import Button from '@/ui/atoms/Button/Button';
import { ControlledInput } from '@/ui/atoms';

interface IProps {
  data: TypeFieldData[];
}

const ContactDetails = (props: IProps) => {
  const { data } = props;
  const [isToggle, setIsToggle] = useState(true);
  const category = Categories.CONTACT;

  const { addListItem, removeListItem, updateValueField } = useHandleFormData({
    category,
    data: additionalContactData,
  });

  const handleChange = useCallback(
    ({ type, name, event }: { event: Event; type?: string; name: string }) => {
      const target = event.target as HTMLInputElement;

      if (type === 'file') {
        if (target?.files) {
          const blobFile = URL.createObjectURL(target.files?.[0]);
          updateValueField({ name, value: blobFile });
        }
      } else {
        updateValueField({ name, value: target?.value });
      }
    },
    []
  );

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
          const { caption, name, type } = item ?? {};
          return (
            <ControlledInput
              name={name}
              key={name}
              type={type}
              caption={caption}
              onChange={(event: Event) => handleChange({ event, type, name })}
            />
          );
        })}
      </div>
      <Button onClick={toggleDetails}>
        {isToggle ? '▼ Add' : '▲ Hide'} additional details
      </Button>
    </>
  );
};

export default ContactDetails;
