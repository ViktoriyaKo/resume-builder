import { client } from '@/graphql-client';
import {
  CreateRequestMutation,
  CreateRequestDocument,
} from '@/graphql/gql/graphql';

interface IProps {
  name?: string;
  contact: string;
  description?: string;
}
export const createRequest = async (data: IProps) => {
  const variables = {
    name: data.name,
    contact: data.contact,
    description: data.description,
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
