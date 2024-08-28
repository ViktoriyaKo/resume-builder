import { HomePage } from '@/packages/home';
import { LanguagesType } from '@/types/types';


function Page({ params: { lang } }: { params: LanguagesType }) {
  return <HomePage lang={lang} />;
}

export default Page;
