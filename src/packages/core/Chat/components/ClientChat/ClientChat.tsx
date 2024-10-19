import { useState, useEffect, useCallback } from 'react';
import styles from '../Chat.module.css';
import { Button, Icon, ChatIcon, Spinner } from '@/ui/atoms';
import { useRequestChat } from '../../hooks';
import { getChat, createMessage } from '../../services';
import { MessageEntity } from '@/graphql/gql/graphql';
import { ChatSection } from '..';
import { useModalContext } from '@/context/ModalContext';
import { generateMessageForTelegram } from '@/services/sendNotifyToTelegram';
import { socket } from '@/socket';

interface FormValue {
  message: string;
}

const ClientChat = () => {
  const { setOpenModal } = useModalContext();
  const [messages, setMessages] = useState<MessageEntity[]>([]);
  const [isOpenChat, setOpenChat] = useState(false);
  const { isLoading, chatId } = useRequestChat(isOpenChat);

  const onSubmit = async (data: FormValue) => {
    try {
      if (chatId) {
        const newData = {
          message: data.message,
          sender: 'user',
          chats: [chatId],
        };
        await createMessage(newData);
      }

      const newMessage = {
        chatId,
        attributes: {
          sender: 'user',
          message: data.message,
          createdAt: new Date(),
        },
      };
      socket.emit('send-message', newMessage);
      const message = generateMessageForTelegram({
        chat: String(chatId),
        description: data.message,
      });
      // await sendDataToTelegram(message);
    } catch (err) {
      console.log(err);
    }
  };

  //start socket
  function receiveMessage(messageData: any) {
    if (messageData?.data?.chatId === chatId) {
      setMessages((prevMessages) => [...prevMessages, messageData?.data]);
    }
  }

  useEffect(() => {
    if (!chatId) return;
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
  }, [chatId]);
  //finish socket

  const fetchMessages = useCallback(async () => {
    if (!chatId) return;
    const data = await getChat(chatId);
    if (data) setMessages(data);
  }, [chatId]);

  useEffect(() => {
    if (chatId) {
      fetchMessages();
    }
  }, [chatId, fetchMessages, setOpenModal]);

  return (
    <>
      <ChatSection.Container isOpen={isOpenChat}>
        <ChatSection.ProfileHeader
          closeChat={() => setOpenChat(false)}
          isAdmin={false}
        />
        {isLoading ? (
          <Spinner size="sm" />
        ) : (
          <ChatSection.Content messages={messages} isAdmin={false} />
        )}
        <ChatSection.InputBox onSubmit={onSubmit} />
      </ChatSection.Container>
      {!isOpenChat && (
        <Button className={styles.iconChat} onClick={() => setOpenChat(true)}>
          <Icon html={ChatIcon} />
        </Button>
      )}
    </>
  );
};

export default ClientChat;
