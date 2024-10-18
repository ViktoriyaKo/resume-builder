import { getAuthClient } from '@/graphql-client';
import { AllChatsQuery, AllChatsDocument } from '@/graphql/gql/graphql';

export const getAllChats = async () => {
  try {
    const authClient = getAuthClient();
    const data = await authClient.request<AllChatsQuery>(AllChatsDocument);
    return data?.chats?.data;
  } catch (error) {
    console.error('Error');
    throw error;
  }
};
