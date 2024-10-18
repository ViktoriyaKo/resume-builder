'use client';
import { useSession } from 'next-auth/react';

const ClientAdminPage = () => {
  const session = useSession();
  const { role } = session?.data ?? {};
  const isAdmin = role === 'admin';

  return isAdmin && <section></section>;
};

export default ClientAdminPage;
