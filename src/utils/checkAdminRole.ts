export const checkAdminRole = (session: any) => {
  const role = session?.data?.role;
  return role === 'admin';
};
