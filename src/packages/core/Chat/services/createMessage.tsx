import { client } from '@/graphql-client';
import {
  CreateMessageMutation,
  CreateMessageDocument,
} from '@/graphql/gql/graphql';

type IProps = {
  message: string; sender: string; chats: string[]
}

export const createMessage = async (variables: IProps) => {
  try {
    const data = await client.request<CreateMessageMutation>(
      CreateMessageDocument,
      variables
    );
    return data;
  } catch (error) {
    console.error('GraphQL Error:', error);
    throw error;
  }
};
