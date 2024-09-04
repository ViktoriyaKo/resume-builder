import TranslationsProvider from '@/providers/TranslationsProvider';
import initTranslations from '@/app/i18n';
import { Locales } from '@/types/types';
import ClientEditPage from './ClientEditPage';

const namespaces = ['edit'];

interface IProps {
  resume: string;
  lang: Locales;
}

const EditPage = async (props: IProps) => {
  const { lang, resume } = props;
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
