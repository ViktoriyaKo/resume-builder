import { ResumeTemplatesPage } from '@/packages/resumeTemplates';
import { getMetaData } from '@/services';
import { LanguagesType } from '@/types/types';

export const revalidate = 3600;

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const data = await getMetaData(lang, 'resume-templates');
  return data;
}

function ResumeTemplates({
  params: { lang },
  searchParams,
}: {
  params: LanguagesType;
  searchParams: { [key: string]: string | string[] };
}) {
  return <ResumeTemplatesPage lang={lang} searchParams={searchParams} />;
}

export default ResumeTemplates;
