import { AdminPage } from '@/packages/admin';
import { LanguagesType } from '@/types/types';

function Admin({ params: { lang } }: { params: LanguagesType }) {
  return <AdminPage lang={lang} />;
}

export default Admin;
