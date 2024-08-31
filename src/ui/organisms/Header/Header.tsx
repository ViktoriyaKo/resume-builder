'use client';
import { RoutersType } from '@/types';
import { Header, LanguageSelect } from '@/ui/molecules';
import { usePathname } from 'next/navigation';

interface IProps {
  routers: RoutersType;
}

export default function HeaderBlock(props: IProps) {
  const { routers } = props;
  const pathname = usePathname();
  const pathParts = pathname.split('/');
  const isDarkHeader = pathParts.length > 2 && pathParts[2]?.includes('sign');

  return (
    <Header.HeaderContainer isDarkHeader={isDarkHeader}>
      <Header.Logo />
      <Header.Navigation routers={routers} />
      {/* <NavBar
        routers={routers}
        pathname={pathname}
      /> */}
      <Header.Login/>
      <LanguageSelect />
    </Header.HeaderContainer>
  );
}
