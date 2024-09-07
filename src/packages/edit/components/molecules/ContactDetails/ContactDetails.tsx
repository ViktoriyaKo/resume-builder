import EditableHeader from '../EditableHeader/EditableHeader';
import styles from './ContactDetails.module.css';
import {
  Categories,
  FormData,
  ShortCategories,
} from '@/packages/edit/constants';
import { TypeFieldData } from '@/packages/edit/types/types';
import { Input } from '@/ui/atoms';
import { useTranslation } from 'react-i18next';

interface IProps {
  data: TypeFieldData[];
}

const ContactDetails = (props: IProps) => {
  const { data } = props;
  const { t } = useTranslation();
  const category = Categories.CONTACT;

  // const handleChange = useCallback(
  //   ({ type, name, event }: { event: Event; type?: string; name: string }) => {
  //     const target = event.target as HTMLInputElement;

  //     if (type === 'file') {
  //       if (target?.files) {
  //         const blobFile = URL.createObjectURL(target.files?.[0]);
  //         updateValueField({ name, value: blobFile });
  //       }
  //     } else {
  //       updateValueField({ name, value: target?.value });
  //     }
  //   },
  //   []
  // );

  return (
    <>
      <EditableHeader
        category={ShortCategories.TITLES}
        name={FormData.PERSONAL_TITLE}
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
            />
          );
        })}
      </div>
    </>
  );
};

export default ContactDetails;
