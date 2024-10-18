import { client } from '@/graphql-client';
import { ChatDocument, ChatQuery } from '@/graphql/gql/graphql';

export const getChat = async (id: string) => {
  const variables = {
    id,
  };

  try {
    const data = await client.request<ChatQuery>(ChatDocument, variables);
    return data.chats?.data?.[0]?.attributes?.messages?.data;
  } catch (error) {
    console.error('GraphQL Error:', error);
    throw error;
  }
};
