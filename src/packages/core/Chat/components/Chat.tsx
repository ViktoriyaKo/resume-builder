'use client';
import { useSession } from 'next-auth/react';
import { checkAdminRole } from '@/utils';

import AdminChat from './AdminChat/AdminChat';
import { ClientChat } from '.';

const Chat = () => {
  const session = useSession();
  const { status } = session;
  const isLoading = status === 'loading';
  const isAdmin = checkAdminRole(session);

  return isLoading ? null : !isAdmin ? <ClientChat /> : <AdminChat />;
};
export default Chat;
