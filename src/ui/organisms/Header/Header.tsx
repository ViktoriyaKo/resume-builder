'use client';
import { RoutersType } from '@/types';
import { Header } from '@/ui/molecules';

interface IProps {
  routers: RoutersType;
}

export default function HeaderBlock(props: IProps) {
  const { routers } = props;

  return (
    <Header.HeaderContainer>
      <Header.Logo />
      <Header.Navigation routers={routers} />
      {/* <NavBar
        routers={routers}
        pathname={pathname}
      /> */}
      {/* <LanguageSelect pathname={pathname} isDark={isDarkHeader} /> */}
    </Header.HeaderContainer>
  );
}
