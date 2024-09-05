'use server';
import { cookies } from 'next/headers';

export const getUserResume = async () => {
  const jwt = cookies().get('jwt');

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/me?populate[resume_items][populate]=*`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwt?.value}`,
        },
      }
    );
    const data = await res.json();
    return data?.resume_items;
  } catch (error) {
    return null;
  }
};
