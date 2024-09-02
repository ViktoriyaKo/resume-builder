import { GraphQLClient } from 'graphql-request';
import Cookies from 'js-cookie';

const jwt = Cookies.get('jwt');

export const client = new GraphQLClient(`${process.env.baseUrl}/graphql`);

export const authClient = new GraphQLClient(`${process.env.baseUrl}/graphql`, {
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
});
