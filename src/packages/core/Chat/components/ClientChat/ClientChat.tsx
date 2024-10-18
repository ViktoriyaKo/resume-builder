import { useState, useEffect, useCallback } from 'react';
import styles from '../Chat.module.css';
import { Button, Icon, ChatIcon, Spinner } from '@/ui/atoms';
import { useRequestChat } from '../../hooks';
import { getChat, createMessage } from '../../services';
import { MessageEntity } from '@/graphql/gql/graphql';
import { ChatSection } from '..';
import { useModalContext } from '@/context/ModalContext';

interface FormValue {
  message: string;
}

const ClientChat = () => {
  const { setOpenModal } = useModalContext();
  const { isLoading, chatId } = useRequestChat();
  const [messages, setMessages] = useState<MessageEntity[]>([]);

  const [isOpen, setOpen] = useState(true);

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

      setMessages([
        ...messages,
        {
          attributes: {
            sender: 'user',
            message: data.message,
            createdAt: new Date(),
          },
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

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
      <ChatSection.Container isOpen={isOpen}>
        <ChatSection.ProfileHeader
          closeChat={() => setOpen(false)}
          isAdmin={false}
        />
        {isLoading ? (
          <Spinner size="sm" />
        ) : (
          <ChatSection.Content messages={messages} isAdmin={false} />
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

export default ClientChat;
