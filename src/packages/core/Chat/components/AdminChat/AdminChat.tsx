import { useState, useEffect, useCallback } from 'react';
import styles from '../Chat.module.css';
import { Button, Icon, ChatIcon } from '@/ui/atoms';
import { createMessage, getAllChats, getChat } from '../../services';
import { MessageEntity } from '@/graphql/gql/graphql';
import { ChatList, ChatSection } from '..';
import { useSession } from 'next-auth/react';
import { checkAdminRole } from '@/utils';
import { ChatEntity } from '@/graphql/gql/graphql';
import { useModalContext } from '@/context/ModalContext';
import { socket } from '@/socket';
import { useSocket } from '@/hooks';

interface FormValue {
  message: string;
}

const AdminChat = () => {
  const session = useSession();
  const isAdmin = checkAdminRole(session);
  const { setOpenModal } = useModalContext();
  const [messages, setMessages] = useState<MessageEntity[]>([]);
  const [chats, setChats] = useState<ChatEntity[]>([]);
  const [isOpenChat, setOpenChat] = useState(false);
  const [chatId, setChatId] = useState<string | null>(null);

  const onSubmit = async (data: FormValue) => {
    try {
      if (chatId) {
        const newData = {
          message: data.message,
          sender: 'admin',
          chats: [chatId],
        };
        await createMessage(newData);
      }
      const newMessage = {
        chatId,
        attributes: {
          sender: 'admin',
          message: data.message,
          createdAt: new Date(),
        },
      };
      socket.emit('send-message', newMessage);
    } catch (err) {
      console.log(err);
    }
  };
  //start socket
  function receiveMessage(messageData: any) {
    setMessages((prevMessages) => [...prevMessages, messageData?.data]);
  }

  useSocket(receiveMessage);
  //finish socket

  const fetchAllChats = useCallback(async () => {
    const data = await getAllChats();
    if (data) setChats(data);
  }, []);

  useEffect(() => {
    fetchAllChats();
    setOpenModal(true);
  }, [fetchAllChats, setOpenModal]);

  const fetchMessagesPerChat = useCallback(
    async (id: string) => {
      try {
        setChatId(id);
        // const data = chats.find((item) => item.id === id);
        // const allMessages = data?.attributes?.messages?.data;
        const data = await getChat(id);
        if (data) setMessages(data);
        setOpenModal(false);
      } catch (err) {
        console.log(err);
      }
    },
    [chats]
  );

  return (
    <>
      <ChatSection.Container isOpen={isOpenChat}>
        <ChatSection.ProfileHeader
          isAdmin={isAdmin}
          closeChat={() => setOpenChat(false)}
        />
        <ChatSection.Content isAdmin={isAdmin} messages={messages}>
          <ChatList chats={chats} handleClick={fetchMessagesPerChat} />
        </ChatSection.Content>

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

export default AdminChat;
