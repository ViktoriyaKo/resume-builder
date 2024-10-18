import { client } from '@/graphql-client';
import { CreateChatMutation, CreateChatDocument } from '@/graphql/gql/graphql';

export const createChat = async (id: string) => {
  const variables = {
    chatId: id,
  };

  try {
    const data = await client.request<CreateChatMutation>(
      CreateChatDocument,
      variables
    );
    return data;
  } catch (error) {
    console.error('GraphQL Error:', error);
    throw error;
  }
};
