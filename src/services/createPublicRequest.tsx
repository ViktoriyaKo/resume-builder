interface IProps {
  path: string;
  body: { [key: string]: string };
}

export const createPublicRequest = async ({ path, body }: IProps) => {
  try {
    await fetch(`${process.env.baseUrl}/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.log(error);
  }
};
