import { ResumeTemplatesPage } from '@/packages/resumeTemplates';
import { LanguagesType } from '@/types/types';

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
