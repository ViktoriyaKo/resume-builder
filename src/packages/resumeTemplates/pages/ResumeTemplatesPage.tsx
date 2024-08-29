import { Locales } from '@/types';
import { Hero, Content } from '../components';
import { getResumeTemplatesData } from '../services/getResumeTemplatesData';
import { TemplateEntity } from '@/graphql/gql/graphql';

interface IProps {
  lang: Locales;
  searchParams: { [key: string]: string | string[] };
}

const ResumeTemplatesPage = async (props: IProps) => {
  const { lang, searchParams } = props;
  const filter = searchParams?.filter ?? 'all';
  const data = await getResumeTemplatesData(lang, filter);
  const templates = data?.templates?.data as TemplateEntity[];
  const allFilters = data?.allFilters?.data as TemplateEntity[];

  return (
    <div>
      <Hero />
      <Content templates={templates} allFilters={allFilters} />
    </div>
  );
};

export default ResumeTemplatesPage;
