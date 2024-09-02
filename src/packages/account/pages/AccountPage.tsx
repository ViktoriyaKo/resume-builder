import { LanguagesType } from '@/types/types';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/providers/TranslationsProvider';
import ClientAccountPage from './ClientAccountPage';

const namespaces = ['account'];

const AccountPage = async (props: LanguagesType) => {
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
      <ClientAccountPage />
    </TranslationsProvider>
  );
};

export default AccountPage;
