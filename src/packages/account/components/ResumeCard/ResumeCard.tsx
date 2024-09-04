import Image from 'next/image';
import { Icon, CustomLink, Button, DeleteIcon } from '@/ui/atoms';
import styles from './ResumeCard.module.css';

interface IOptions {
  name: string;
  handleClick: () => void;
}

interface IProps {
  href: string;
  handleDelete: () => void;
  image: string;
  options?: IOptions[];
  onContextMenu?: (
    e: React.MouseEvent<HTMLDivElement>,
    options: IOptions[]
  ) => void;
}

const ResumeCard = (props: IProps) => {
  const { href, handleDelete, image, onContextMenu, options } = props;

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (onContextMenu && options) {
      onContextMenu(event, options);
    }
  };

  return (
    <>
      <CustomLink
        href={href}
        className={styles.card}
        prefix={
          <>
            <Button onClick={handleDelete} className={styles.delete}>
              <Icon html={DeleteIcon} />
            </Button>
            <Image
              onContextMenu={handleContextMenu}
              className={styles.image}
              src={image}
              alt={href ?? ''}
              sizes="(max-width: 768px) 70vw, 30vw"
              quality={70}
              fill
            />
          </>
        }
      />
    </>
  );
};

export default ResumeCard;
