import { LanguagesType } from '@/types/types';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/providers/TranslationsProvider';
import ClientSignInPage from './ClientSignInPage';

const namespaces = ['sign'];

const SignInPage = async (props: LanguagesType) => {
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
      <ClientSignInPage />
    </TranslationsProvider>
  );
};

export default SignInPage;
