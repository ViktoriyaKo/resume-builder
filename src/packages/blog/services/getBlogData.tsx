import { client } from '@/graphql-client';
import { BlogQuery, BlogDocument } from '@/graphql/gql/graphql';

export const getBlogData = async (locale: string) => {
  try {
    const variables = {
      locale,
    };

    const data = await client.request<BlogQuery>(BlogDocument, variables);
    return data;
  } catch (err) {
    console.log(err);
  }
};
