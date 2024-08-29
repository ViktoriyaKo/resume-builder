import { EditPage } from '@/packages/edit';
import { LanguagesType } from '@/types/types';

function Edit({ params: { lang } }: { params: LanguagesType }) {
  return <EditPage lang={lang} />;
}

export default Edit;
