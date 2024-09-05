import { authClient } from '@/graphql-client';
import {
  UpdateResumeItemMutation,
  UpdateResumeItemDocument,
} from '@/graphql/gql/graphql';

export const updateResume = async (data: any) => {
  const variables = { data };

  try {
    const data = await authClient.request<UpdateResumeItemMutation>(
      UpdateResumeItemDocument,
      variables
    );
    return data;
  } catch (error) {
    console.error('GraphQL Error:', error);
    throw error;
  }
};
