interface IProps {
  email?: string | null;
  jwt: unknown;
}

export const fetchUserResumeData = async (props: IProps) => {
  const { email, jwt } = props;
  if (!email) return null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/me?populate=*`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const data = await res.json();
    return data?.resume_item;
  } catch (error) {
    return null;
  }
};
