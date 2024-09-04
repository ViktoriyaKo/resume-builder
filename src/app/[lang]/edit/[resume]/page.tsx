import { EditPage } from '@/packages/edit';
import { Locales } from '@/types/types';

function Edit({
  params: { lang, resume },
}: {
  params: { lang: Locales; resume: string };
}) {
  return <EditPage lang={lang} resume={resume} />;
}

export default Edit;
