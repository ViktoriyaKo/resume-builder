import { NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';
import { AllChatsQuery, AllChatsDocument } from '@/graphql/gql/graphql';

export async function GET(req: Request) {
  try {
    const client = new GraphQLClient(`${process.env.baseApiUrl}/graphql`, {
      headers: {
        Authorization: `Bearer ${process.env.ADMIN_TOKEN}`,
      },
    });
    const data = await client.request<AllChatsQuery>(AllChatsDocument);

    return NextResponse.json(data?.chats?.data, { status: 200 });
  } catch (error: any) {
    console.log('error');

    return NextResponse.json(
      { message: 'An unexpected error occurred' },
      { status: 400 }
    );
  }
}
