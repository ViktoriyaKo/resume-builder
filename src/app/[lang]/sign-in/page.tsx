import { SignInPage } from '@/packages/login';
import { LanguagesType } from '@/types/types';

function SignIn({ params: { lang } }: { params: LanguagesType }) {
  return <SignInPage lang={lang} />;
}

export default SignIn;
