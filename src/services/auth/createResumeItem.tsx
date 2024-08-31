import { client } from '@/graphql-client';
import {
  CreateResumeItemMutation,
  CreateResumeItemDocument,
} from '@/graphql/gql/graphql';

export const createResumeItem = async (user: string) => {
  const variables = { user };

  try {
    const data = await client.request<CreateResumeItemMutation>(
      CreateResumeItemDocument,
      variables
    );
    return data;
  } catch (error) {
    console.error('Error');
    throw error;
  }
};
