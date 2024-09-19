import { createUser } from '@/services';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);

    return NextResponse.json(body);
  } catch (error: any) {
    console.log(error);
    return;
  }
}
