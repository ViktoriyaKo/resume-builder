import { client } from '@/graphql-client';
import { BlogItemQuery, BlogItemDocument } from '@/graphql/gql/graphql';
import { LanguagesType } from '@/types/types';

export const getBlogItemData = async (locale: LanguagesType, slug: string) => {
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
