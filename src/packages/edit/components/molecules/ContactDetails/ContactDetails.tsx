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
import { UploadPhoto } from '../../atoms';

interface IProps {
  data: TypeFieldData[];
}

const ContactDetails = (props: IProps) => {
  const { data } = props;
  const { t } = useTranslation();
  const category = Categories.CONTACT;

  return (
    <>
      <EditableHeader
        category={ShortCategories.TITLES}
        name={FormDataConstants.PERSONAL_TITLE}
      />
      <div className={styles.wrapper}>
        <UploadPhoto />

        {data.map((item) => {
          const { caption, name, type, value: defaultValue } = item ?? {};

          return (
            <Input
              key={name}
              name={`${category}.${name}`}
              type={type}
              defaultValue={defaultValue}
              label={t(caption)}
            />
          );
        })}
      </div>
    </>
  );
};

export default ContactDetails;
