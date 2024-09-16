import { client } from '@/graphql-client';
import { LoginMutation, LoginDocument } from '@/graphql/gql/graphql';

interface IProps {
  email: string;
  password: string;
}
export const loginUser = async (data: IProps) => {
  const variables = {
    input: data,
  };

  try {
    const data = await client.request<LoginMutation>(LoginDocument, variables);
    return data;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
};
