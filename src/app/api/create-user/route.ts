import { createUser } from '@/services';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { jwt } = await createUser(body);

    return NextResponse.json({ jwt }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    const errorMessage = 'Email or Username are already taken';
    if (error?.response?.errors?.[0]?.message === errorMessage) {
      return NextResponse.json(
        { message: 'Email has already taken' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'An unexpected error occurred' },
      { status: 405 }
    );
  }
}
