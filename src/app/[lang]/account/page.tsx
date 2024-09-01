import { AccountPage } from '@/packages/account';
import { LanguagesType } from '@/types/types';

function Account({ params: { lang } }: { params: LanguagesType }) {  
  return <AccountPage lang={lang} />;
}

export default Account;
