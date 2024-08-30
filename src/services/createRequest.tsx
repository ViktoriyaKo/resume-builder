import { client } from '@/graphql-client';
import {
  CreateRequestMutation,
  CreateRequestDocument,
} from '@/graphql/gql/graphql';

interface IProps {
  email?: string;
  text: string;
}
export const createRequest = async (data: IProps) => {
  const variables = {
    contact: data.email,
    description: data.text,
  };

  try {
    const data = await client.request<CreateRequestMutation>(
      CreateRequestDocument,
      variables
    );
    return data;
  } catch (error) {
    console.error('GraphQL Error:', error);
    throw error;
  }
};
