import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(`${process.env.baseUrl}/graphql`);
