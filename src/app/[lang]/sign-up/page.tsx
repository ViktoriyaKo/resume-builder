import { SignUpPage } from '@/packages/login';
import { LanguagesType } from '@/types/types';

function SignUp({ params: { lang } }: { params: LanguagesType }) {
  return <SignUpPage lang={lang} />;
}

export default SignUp;
