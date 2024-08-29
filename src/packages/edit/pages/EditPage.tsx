import TranslationsProvider from '@/providers/TranslationsProvider';
import initTranslations from '@/app/i18n';
import { LanguagesType } from '@/types/types';
import ClientEditPage from './ClientEditPage';

const namespaces = ['edit'];

const EditPage = async (props: LanguagesType) => {
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
      <ClientEditPage />
    </TranslationsProvider>
  );
};

export default EditPage;
