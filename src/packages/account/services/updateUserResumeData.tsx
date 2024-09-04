import Cookies from 'js-cookie';

export const updateUserResumeData = async (body) => {
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
    console.log('data', data);
    return data;
  } catch (error) {
    console.log('error', error);
  }
};
