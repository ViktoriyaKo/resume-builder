import { useState, useEffect, useCallback } from 'react';
import styles from '../Chat.module.css';
import { Button, Icon, ChatIcon, Spinner } from '@/ui/atoms';
import { useRequestChat } from '../../hooks';
import { createMessage, getAllChats, getChat } from '../../services';
import { MessageEntity } from '@/graphql/gql/graphql';
import { ChatList, ChatSection } from '..';
import { useSession } from 'next-auth/react';
import { checkAdminRole } from '@/utils';
import { ChatEntity } from '@/graphql/gql/graphql';
import { useModalContext } from '@/context/ModalContext';

interface FormValue {
  message: string;
}

const AdminChat = () => {
  const session = useSession();
  const isAdmin = checkAdminRole(session);
  const { setOpenModal } = useModalContext();
  const { isLoading, chatId } = useRequestChat();
  const [messages, setMessages] = useState<MessageEntity[]>([]);
  const [chats, setChats] = useState<ChatEntity[]>([]);
  const [isOpen, setOpen] = useState(true);

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

      setMessages([
        ...messages,
        {
          attributes: {
            sender: 'admin',
            message: data.message,
            createdAt: new Date(),
          },
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAllChats = useCallback(async () => {
    const data = await getAllChats();
    if (data) setChats(data);
  }, []);

  useEffect(() => {
    fetchAllChats();
    setOpenModal(true);
  }, [chatId, fetchAllChats, setOpenModal]);

  const fetchMessagesPerChat = useCallback(
    async (id: string) => {
      try {
        const data = chats.find((item) => item.id === id);
        const allMessages = data?.attributes?.messages?.data;
        if (allMessages) setMessages(allMessages);
        setOpenModal(false);
      } catch (err) {
        console.log(err);
      }
    },
    [chats]
  );

  return (
    <>
      <ChatSection.Container isOpen={isOpen}>
        <ChatSection.ProfileHeader
          isAdmin={isAdmin}
          closeChat={() => setOpen(false)}
        />
        {isLoading ? (
          <Spinner size="sm" />
        ) : (
          <ChatSection.Content isAdmin={isAdmin} messages={messages}>
            <ChatList chats={chats} handleClick={fetchMessagesPerChat} />
          </ChatSection.Content>
        )}
        <ChatSection.InputBox onSubmit={onSubmit} />
      </ChatSection.Container>
      {!isOpen && (
        <Button className={styles.iconChat} onClick={() => setOpen(true)}>
          <Icon html={ChatIcon} />
        </Button>
      )}
    </>
  );
};

export default AdminChat;
