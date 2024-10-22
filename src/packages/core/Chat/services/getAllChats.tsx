import { getAdminClient } from '@/graphql-client';
import { AllChatsQuery, AllChatsDocument } from '@/graphql/gql/graphql';

export const getAllChats = async () => {
  try {
    const authClient = getAdminClient();
    const data = await authClient.request<AllChatsQuery>(AllChatsDocument);
    return data?.chats?.data;
  } catch (error) {
    console.error('Error');
    throw error;
  }
};
