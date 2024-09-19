import { client } from '@/graphql-client';
import { PrivacyQuery, PrivacyDocument } from '@/graphql/gql/graphql';
import { Locales } from '@/types';

export const getPrivacyData = async (locale: Locales) => {
  try {
    const variables = {
      locale,
    };

    const data = await client.request<PrivacyQuery>(PrivacyDocument, variables);
    return data;
  } catch (err) {
    console.log("Error");  }
};
