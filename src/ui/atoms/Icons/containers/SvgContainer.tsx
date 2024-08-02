import Image from 'next/image';

interface Props {
  path: string;
  alt?: string;
  style?: React.CSSProperties;
}

export const SvgContainer = (props: Props) => {
  const { path, alt = 'icon', style = { display: 'flex' } } = props;

  return <Image src={path} alt={alt} style={style} />;
};
