import Image from 'next/image';
import { Icon, CustomLink, Button, DeleteIcon } from '@/ui/atoms';
import styles from './ResumeCard.module.css';
import { InputMaybe, IdFilterInput } from '@/graphql/gql/graphql';

interface IOptions {
  name: string;
  handleClick: () => void;
}

interface IProps {
  id?: InputMaybe<IdFilterInput>;
  image: string;
  handleDelete?: () => void;
  options?: IOptions[];
  onContextMenu?: (
    e: React.MouseEvent<HTMLDivElement>,
    options: IOptions[]
  ) => void;
}

const ResumeCard = (props: IProps) => {
  const { id, handleDelete, image } = props;

  return (
    <>
      <CustomLink
        href={`/edit/${id}`}
        className={styles.card}
        prefix={
          <>
            {handleDelete && (
              <Button onClick={handleDelete} className={styles.delete}>
                <Icon html={DeleteIcon} />
              </Button>
            )}
            {image && (
              <Image
                className={styles.image}
                src={image}
                alt={`resume-${id}`}
                sizes="(max-width: 768px) 70vw, 30vw"
                quality={70}
                fill
              />
            )}
          </>
        }
      />
    </>
  );
};

export default ResumeCard;
