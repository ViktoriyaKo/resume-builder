import { AccountPage } from '@/packages/account';
import { getMetaData } from '@/services';
import { LanguagesType } from '@/types/types';

export async function generateMetadata({
  params: { lang } ,
}: {
  params: LanguagesType;
}) {
  const data = await getMetaData(lang, 'account');
  return data;
}

function Account({ params: { lang } }: { params: LanguagesType }) {
  return <AccountPage lang={lang} />;
}

export default Account;
