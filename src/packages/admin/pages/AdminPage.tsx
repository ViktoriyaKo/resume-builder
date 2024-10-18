import { LanguagesType } from '@/types/types';
import ClientAdminPage from './ClientAdminPage';
import { Hero } from '@/ui/molecules';

const AdminPage = async (props: LanguagesType) => {
  return (
    <>
      <Hero title={'Admin panel'} />
      <ClientAdminPage />
    </>
  );
};

export default AdminPage;
