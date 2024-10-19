import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { createChat } from '../services';

const useRequestChat = (isOpenChat: boolean) => {
  const [chatId, setChatId] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  const createInitialChat = async () => {
    try {
      const chatId = uuid();
      const data = await createChat(chatId);
      return data?.createChat?.data?.id;
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    if(isOpenChat) {
    const initializeChat = async () => {
      let currentChat = localStorage.getItem('chat');

      if (!currentChat) {
        const id = await createInitialChat();
        if (id) {
          localStorage.setItem('chat', id);
          setChatId(id);
        }
      } else {
        setChatId(currentChat);
      }
      setLoading(false);
    };
  

    initializeChat();
  }
  }, [isOpenChat]);

  return { isLoading, chatId };
};

export default useRequestChat;
