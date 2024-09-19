import { loginUser } from '@/services';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const res = await loginUser(body);
    return NextResponse.json({ message: res }, { status: 200 });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(
      { message: 'An unexpected error occurred' },
      { status: 400 }
    );
  }
}
