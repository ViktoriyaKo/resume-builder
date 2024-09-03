import Image from 'next/image';
import { Icon, CustomLink, Button, DeleteIcon } from '@/ui/atoms';
import styles from './ResumeCard.module.css';
import { MouseEvent } from 'react';

interface IOptions {
  name: string;
  handleClick: () => void;
}

interface IProps {
  href: string;
  handleDelete: () => void;
  image: string;
  options: IOptions[];
  onContextMenu: (e: MouseEvent<HTMLImageElement>, options: IOptions[]) => void;
}

const ResumeCard = (props: IProps) => {
  const { href, handleDelete, image, onContextMenu, options } = props;

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
              onContextMenu={(event) => onContextMenu(event, options)}
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
