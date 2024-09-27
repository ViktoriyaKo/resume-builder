import TranslationsProvider from '@/providers/TranslationsProvider';
import initTranslations from '@/app/i18n';
import { Locales } from '@/types/types';
import ClientEditPage from './ClientEditPage';
import { TemplateEntity } from '@/graphql/gql/graphql';
import { getAllTemplates } from '../services';

const namespaces = ['edit'];

interface IProps {
  resume: string;
  lang: Locales;
}

const EditPage = async (props: IProps) => {
  const { lang, resume } = props;
  const [translations, data] = await Promise.all([
    initTranslations({ lang, namespaces }),
    getAllTemplates(lang),
  ]);
  const { resources } = translations;
  const templates = data?.templates?.data as TemplateEntity[];

  return (
    <TranslationsProvider
      namespaces={namespaces}
      lang={lang}
      resources={resources}
    >
      <ClientEditPage resume={resume} templates={templates} />
    </TranslationsProvider>
  );
};

export default EditPage;
