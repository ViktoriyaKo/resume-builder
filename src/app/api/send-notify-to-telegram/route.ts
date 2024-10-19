import { sendTelegramMessage } from '@/services/sendNotifyToTelegram';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await sendTelegramMessage(body);
    return NextResponse.json({ message: 'ok' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'ok' }, { status: 200 });
  }
}
