import TranslationsProvider from '@/providers/TranslationsProvider';
import ClientSignUpPage from './ClientSignUpPage';
import initTranslations from '@/app/i18n';
import { LanguagesType } from '@/types/types';

const namespaces = ['sign'];

const SignUpPage = async (props: LanguagesType) => {
  const { lang } = props;
  const { resources } = await initTranslations({
    lang,
    namespaces,
  });

  return (
    <TranslationsProvider
      namespaces={namespaces}
      lang={lang}
      resources={resources}
    >
      <ClientSignUpPage />
    </TranslationsProvider>
  );
};

export default SignUpPage;
