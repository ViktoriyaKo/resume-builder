import { client } from '@/graphql-client';
import { CreateUserMutation, CreateUserDocument } from '@/graphql/gql/graphql';

interface IProps {
  email: string;
  password: string;
}
export const createUser = async (data: IProps) => {
  const variables = {
    input: {
      email: data.email,
      password: data.password,
      username: data.email,
    },
  };

  try {
    const data = await client.request<CreateUserMutation>(
      CreateUserDocument,
      variables
    );
    const {user, jwt} = data.register;
    return {id: user.id, jwt }
  } catch (error) {
    console.error('Error');
    throw error;
  }
};
