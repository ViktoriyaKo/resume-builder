import Cookies from 'js-cookie';

export const updateUserResumeData = async (body: any) => {
  const jwt = Cookies.get('jwt');

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/me`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('error', error);
  }
};
