import { GraphQLClient } from 'graphql-request';
import Cookies from 'js-cookie';

export const client = new GraphQLClient(`${process.env.baseApiUrl}/graphql`);

export const getAuthClient = () => {
  const jwt = Cookies.get('jwt');
  if (!jwt) {
    throw new Error('User is unauthorized');
  }

  return new GraphQLClient(`${process.env.baseApiUrl}/graphql`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};

export const getAdminClient = () => {
  const jwt = Cookies.get('adminToken');
  if (!jwt) {
    throw new Error('Access is forbidden');
  }

  return new GraphQLClient(`${process.env.baseApiUrl}/graphql`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};
