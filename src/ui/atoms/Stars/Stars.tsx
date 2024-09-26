import { Rating } from 'react-simple-star-rating';

interface IProps {
  size?: number;
  value: string;
  color?: string;
}

const Stars = (props: IProps) => {
  const { size = 15, value, color = '#f1a545' } = props;
  const score: Record<string, number> = {
    A1: 2,
    A2: 3,
    B1: 3.5,
    B2: 4,
    C1: 4.5,
    C2: 5,
  };

  return value ? (
    <Rating
      fillColor={color}
      allowFraction={true}
      initialValue={score[value]}
      readonly={true}
      size={size}
    />
  ) : null;
};

export default Stars;
