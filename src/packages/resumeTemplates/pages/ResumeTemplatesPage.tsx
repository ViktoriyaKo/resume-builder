import { Locales } from '@/types';
import { Content } from '../components';
import { getResumeTemplatesData } from '../services/getResumeTemplatesData';
import { TemplateEntity } from '@/graphql/gql/graphql';
import { Hero } from '@/ui/molecules';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/providers/TranslationsProvider';

interface IProps {
  lang: Locales;
  searchParams: { [key: string]: string | string[] };
}

const namespaces = ['common'];

const ResumeTemplatesPage = async (props: IProps) => {
  const { lang, searchParams } = props;
  const { resources } = await initTranslations({
    lang,
    namespaces,
  });
  const filter = searchParams?.filter ?? 'all';
  const data = await getResumeTemplatesData(lang, filter);
  const templates = data?.templates?.data as TemplateEntity[];
  const allFilters = data?.allFilters?.data as TemplateEntity[];

  return (
    <TranslationsProvider
      lang={lang}
      namespaces={namespaces}
      resources={resources}
    >
      <div>
        <Hero title={'title_templates'} />
        <Content templates={templates} allFilters={allFilters} />
      </div>
    </TranslationsProvider>
  );
};

export default ResumeTemplatesPage;
