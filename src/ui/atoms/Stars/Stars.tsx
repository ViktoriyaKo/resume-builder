import { Rating } from 'react-simple-star-rating';

interface IProps {
  size?: number;
  value: string | number;
  color?: string;
  isLevel?: boolean;
}

const Stars = (props: IProps) => {
  const { size = 15, value, color = '#f1a545', isLevel = true } = props;
  const score: Record<string, number> = {
    A1: 2,
    A2: 3,
    B1: 3.5,
    B2: 4,
    C1: 4.5,
    C2: 5,
    'Native speaker': 5,
  };

  return value ? (
    <Rating
      fillColor={color}
      allowFraction={true}
      initialValue={isLevel ? score[value] : (value as number)}
      readonly={true}
      size={size}
    />
  ) : null;
};

export default Stars;
