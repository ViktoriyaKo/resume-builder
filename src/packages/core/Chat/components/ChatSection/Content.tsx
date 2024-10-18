import { getTimeShortFormat } from '@/utils';
import styles from './ChatItems.module.css';
import clsx from 'clsx';
import React, { ReactNode, useEffect, useRef } from 'react';
import { MessageEntity } from '@/graphql/gql/graphql';
import { useModalContext } from '@/context/ModalContext';

interface IProps {
  messages: MessageEntity[];
  isAdmin: boolean;
  children?: ReactNode;
}

const Content = (props: IProps) => {
  const { messages, isAdmin, children } = props;
  const { isOpenModal } = useModalContext();

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={styles.content}>
      {!isOpenModal
        ? messages?.length > 0 &&
          messages?.map((item) => {
            const { sender, message, createdAt } = item?.attributes ?? {};
            return (
              <div key={createdAt} className={styles.messageWrapper}>
                <div className={styles.date}>
                  {getTimeShortFormat(createdAt)}
                </div>
                <div
                  className={clsx(
                    styles.message,
                    (isAdmin && sender === 'user') ||
                      (!isAdmin && sender === 'admin')
                      ? styles.getMessage
                      : styles.sendMessage
                  )}
                >
                  {message}
                </div>
              </div>
            );
          })
        : children}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Content;
