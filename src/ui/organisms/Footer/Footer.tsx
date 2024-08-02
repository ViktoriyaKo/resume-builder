'use client';
import { Footer } from '@/ui/molecules';
interface IProps {
  title?: string;
  routers: { title: string; href: string }[];
  form: React.ReactNode;
}

export default function FooterBlock(props: IProps) {
  const { routers, title, form } = props;

  return (
    <Footer.FooterContainer>
      <Footer.Location />
      <Footer.Title title={title ?? ''} />
      <Footer.Navigation routers={routers} />
      {form}
      <Footer.Author />
    </Footer.FooterContainer>
  );
}
