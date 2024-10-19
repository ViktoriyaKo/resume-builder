import { io } from 'socket.io-client';

const URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://api.create-resume.online';

export const socket = io(URL, {
  autoConnect: false,
});
