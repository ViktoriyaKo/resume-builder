import { client } from '@/graphql-client';
import { HomeDocument, HomeQuery } from '@/graphql/gql/graphql';

export const getHomeData = async (locale: string) => {
  try {
    const variables = {
      locale,
    };

    const data = await client.request<HomeQuery>(HomeDocument, variables);
    return data;
  } catch (err) {
    console.log(err);
  }
};
