interface ArgsType {
  method: 'POST' | 'GET' | 'DELETE';
  data: { [key: string]: string | undefined };
}

const getRequestOptions = ({ method, data }: ArgsType) => {
  const options: RequestInit = {
    method: method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(data),
  };
  return options;
};

export default getRequestOptions;
