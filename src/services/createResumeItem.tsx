import { getAuthClient } from '@/graphql-client';
import {
  CreateResumeItemMutation,
  CreateResumeItemDocument,
} from '@/graphql/gql/graphql';

export const createResumeItem = async () => {
  try {
    const authClient = getAuthClient()
    const data = await authClient.request<CreateResumeItemMutation>(
      CreateResumeItemDocument
    );
    return data.createResumeItem?.data;
  } catch (error) {
    console.error('Error');
    throw error;
  }
};
