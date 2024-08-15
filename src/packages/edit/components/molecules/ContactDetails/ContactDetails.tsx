import EditableHeader from '../EditableHeader/EditableHeader';
import styles from './ContactDetails.module.css';

import {
  Categories,
  FormData,
  ShortCategories,
} from '@/packages/edit/constants';
import { ChangeEvent, useCallback, useState } from 'react';
import { TypeFieldData } from '@/packages/edit/types/types';
import { ADDITIONAL_CONTACT_ENTITY } from '@/packages/edit/entities';
import { useHandleFormData } from '@/packages/edit/hooks';
import Button from '@/ui/atoms/Button/Button';
import { Input } from '@/ui/atoms';

interface IProps {
  data: TypeFieldData[];
}

const ContactDetails = (props: IProps) => {
  const { data } = props;
  const [isToggle, setIsToggle] = useState(true);
  const category = Categories.CONTACT;

  const { addListItem, removeListItem, updateValueField } = useHandleFormData({
    category,
    data: ADDITIONAL_CONTACT_ENTITY,
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
            <Input
              name={name}
              key={name}
              type={type}
              caption={caption}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                handleChange({ event: event.nativeEvent, type, name })
              }
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
