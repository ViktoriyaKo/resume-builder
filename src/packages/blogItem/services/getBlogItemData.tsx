import { client } from '@/graphql-client';
import { BlogItemQuery, BlogItemDocument } from '@/graphql/gql/graphql';

export const getBlogItemData = async (locale: string, slug: string) => {
  try {
    const variables = {
      locale,
      slug,
    };

    const data = await client.request<BlogItemQuery>(
      BlogItemDocument,
      variables
    );
    return data;
  } catch (err) {
    console.log('error');
  }
};
