import { EditPage } from '@/packages/edit';
import { getMetaData } from '@/services';
import { Locales } from '@/types/types';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locales };
}) {
  const data = await getMetaData(lang, 'edit');
  return data;
}

function Edit({
  params: { lang, resume },
}: {
  params: { lang: Locales; resume: string };
}) {
  return <EditPage lang={lang} resume={resume} />;
}

export default Edit;
