import { socket } from '@/socket';
import { useEffect } from 'react';

const useSocket = (receiveMessage:any) => {
  useEffect(() => {
    socket.connect();

    function onConnect() {
      console.log(`Connected with socket`);
    }

    socket.on('connect', onConnect);
    socket.on('receive-message', receiveMessage);

    return () => {
      socket.off('connect', onConnect);
      socket.off('receive-message', receiveMessage);
      socket.disconnect();
    };
  }, []);
};

export default useSocket;
