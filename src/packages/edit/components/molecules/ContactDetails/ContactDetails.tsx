import EditableHeader from '../EditableHeader/EditableHeader';
import styles from './ContactDetails.module.css';
import {
  Categories,
  FormData as FormDataConstants,
  ShortCategories,
} from '@/packages/edit/constants';
import { TypeFieldData } from '@/packages/edit/types/types';
import { Input } from '@/ui/atoms';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { uploadImageToDB } from '@/packages/edit/services';

interface IProps {
  data: TypeFieldData[];
}

const ContactDetails = (props: IProps) => {
  const { data } = props;
  const { t } = useTranslation();
  const category = Categories.CONTACT;
  // const { setValue } = useFormContext();

  const handleChange = useCallback(async (event: Event) => {
    const target = event.target as HTMLInputElement;

    if (target?.files && target?.files?.length > 0) {
      const file = target.files[0];
      const formData = new FormData();
      formData.append('files', file);
      const imageId = await uploadImageToDB(formData);
    }
  }, []);

  return (
    <>
      <EditableHeader
        category={ShortCategories.TITLES}
        name={FormDataConstants.PERSONAL_TITLE}
      />
      <div className={styles.wrapper}>
        {data.map((item) => {
          const { caption, name, type, value: defaultValue } = item ?? {};

          return (
            <Input
              key={name}
              name={`${category}.${name}`}
              type={type}
              defaultValue={defaultValue}
              label={t(caption)}
              // onChange={handleChange}
            />
          );
        })}
      </div>
    </>
  );
};

export default ContactDetails;
