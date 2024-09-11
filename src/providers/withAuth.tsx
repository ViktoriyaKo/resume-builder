import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function withAuth(Component: any) {
  return function WithAuth(props: any) {
    const { status } = useSession();
    const isAuthorized = status === 'authenticated';

    useEffect(() => {
      if (!isAuthorized) {
        redirect('/');
      }
    }, [status]);

    if (!isAuthorized) {
      return null;
    }

    return <Component {...props} />;
  };
}
