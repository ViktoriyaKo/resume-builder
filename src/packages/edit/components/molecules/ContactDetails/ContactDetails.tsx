import EditableHeader from '../EditableHeader/EditableHeader';
import { Input } from '@/ui/atoms';
import styles from './ContactDetails.module.css';

const ContactDetails = (props) => {
  const { data } = props;

  return (
    <>
      <EditableHeader title="Personal Details" />
      <div className={styles.wrapper}>
        {data.map((item) => {
          const { caption, id, type } = item;
          return <Input type={type} key={id} caption={caption} />;
        })}
      </div>
    </>
  );
};

export default ContactDetails;
