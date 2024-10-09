import { HomePage } from '@/packages/home';
import { getMetaData } from '@/services';
import { LanguagesType } from '@/types/types';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const data = await getMetaData(lang, 'home');
  return data;
}

function Page({ params: { lang } }: { params: LanguagesType }) {
  return <HomePage lang={lang} />;
}

export default Page;
