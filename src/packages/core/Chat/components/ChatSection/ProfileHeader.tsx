import { ArrowIcon, Button, Icon } from '@/ui/atoms';
import Image from 'next/image';
import styles from './ChatItems.module.css';
import { useModalContext } from '@/context/ModalContext';

interface IProps {
  closeChat: () => void;
  isAdmin: boolean;
}

const ProfileHeader = (props: IProps) => {
  const { closeChat, isAdmin } = props;
  const { isOpenModal, setOpenModal } = useModalContext();
  const adminImage =
    'https://res.cloudinary.com/dzwxhvkhw/image/upload/v1728576941/photo_4b180e11b8.jpg';

  return (
    <div className={styles.top}>
      {isAdmin && !isOpenModal && (
        <Button className={styles.back} onClick={() => setOpenModal(true)}>
          <Icon html={ArrowIcon} />
        </Button>
      )}
     {(isOpenModal || (!isOpenModal && !isAdmin)) && <div className={styles.imageWrapper}>
         <Image
          className={styles.image}
          width={45}
          height={45}
          src={adminImage}
          alt="admin"
        />
      </div>}
      <header>
        <p className={styles.bold}>Viktoriia</p>
        <p className={styles.job}>Admin</p>
      </header>
      <Button className={styles.button} onClick={closeChat}>
        <Icon html={ArrowIcon} />
      </Button>
    </div>
  );
};

export default ProfileHeader;
