import Image from 'next/image';
import { Icon, CustomLink, Button, DeleteIcon } from '@/ui/atoms';
import styles from './ResumeCard.module.css';
import {
  InputMaybe,
  IdFilterInput,
  StringFilterInput,
} from '@/graphql/gql/graphql';
import { useParams } from 'next/navigation';

interface IOptions {
  name: string;
  handleClick: () => void;
}

interface IProps {
  id?: InputMaybe<IdFilterInput>;
  cover?: { url?: string };
  handleDelete?: (id?: InputMaybe<IdFilterInput>) => void;
  options?: IOptions[];
  design?: InputMaybe<StringFilterInput>;
  onContextMenu?: (
    e: React.MouseEvent<HTMLDivElement>,
    options: IOptions[]
  ) => void;
}

const ResumeCard = (props: IProps) => {
  const { id, handleDelete, cover, design } = props;
  const imageUrl = cover?.url ?? '';
  const { lang } = useParams();

  return (
    <>
      <CustomLink
        href={`/${lang}/edit/${id}?design=${design ?? 'simple1'}`}
        className={styles.card}
        prefix={
          <>
            {handleDelete && id && (
              <Button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  handleDelete(id);
                }}
                className={styles.delete}
              >
                <Icon html={DeleteIcon} />
              </Button>
            )}
            {imageUrl && (
              <Image
                className={styles.image}
                src={imageUrl}
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
