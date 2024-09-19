import { loginUser } from '@/services';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    console.log('test');
    const body = await req.json();
    const res = await loginUser(body);
    console.log('res', res);
    return NextResponse.json({ message: res }, { status: 200 });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(
      { message: 'An unexpected error occurred' },
      { status: 400 }
    );
  }
}
