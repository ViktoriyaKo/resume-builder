import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({ req });
    const access_token = token?.access_token;
    const response = await fetch('https://api.linkedin.com/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const result = await response.json();
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error: any) {
    console.log('error');

    return NextResponse.json(
      { message: 'An unexpected error occurred' },
      { status: 400 }
    );
  }
}
