import Image from 'next/image';
import { Icon, CustomLink, Button, DeleteIcon } from '@/ui/atoms';
import styles from './ResumeCard.module.css';
import {
  InputMaybe,
  IdFilterInput,
  StringFilterInput,
} from '@/graphql/gql/graphql';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';


interface IOptions {
  name: string;
  handleClick: () => void;
}

interface IProps {
  id?: InputMaybe<IdFilterInput>;
  index: number;
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
  const { id, handleDelete, cover, design, index } = props;
  const imageUrl = cover?.url ?? '';
  const { lang } = useParams();
  const { t } = useTranslation();

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
            {imageUrl ? (
              <Image
                className={styles.image}
                src={imageUrl}
                alt={`resume-${id}`}
                sizes="(max-width: 768px) 70vw, 30vw"
                quality={70}
                fill
              />
            ) : (
              <p className={styles.title}>{t('your_resume')} #{index + 1}</p>
            )}
          </>
        }
      />
    </>
  );
};

export default ResumeCard;
