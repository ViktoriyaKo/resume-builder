import { client } from '@/graphql-client';
import { AllTemplatesDocument, AllTemplatesQuery } from '@/graphql/gql/graphql';

export const getAllTemplates = async (locale: string) => {
  try {
    const variables = {
      locale,
    };

    const data = await client.request<AllTemplatesQuery>(
      AllTemplatesDocument,
      variables
    );
    return data;
  } catch (err) {
    console.log('Error');
  }
};
