import styles from './ChatList.module.css';
import { getTimeShortFormat } from '@/utils';
import { ChatEntity } from '@/graphql/gql/graphql';

interface IProps {
  chats: ChatEntity[];
  handleClick: (arg: string) => void;
}

const ChatList = (props: IProps) => {
  const { chats, handleClick } = props;

  return (
    <ul className={styles.list}>
      {chats?.length > 0 &&
        chats?.map((item) => {
          const { id, attributes } = item ?? {};
          const messageInfo = attributes?.messages?.data?.[0]?.attributes;

          return (
            <li
              className={styles.item}
              key={id}
              onClick={() => id && handleClick(id)}
            >
              <div>
                <span className={styles.name}>Chat #{id}</span>
                <p className={styles.lastMessage}>
                  {messageInfo ? messageInfo?.message : 'нет сообщений'}
                </p>
              </div>
              {messageInfo && (
                <div className={styles.date}>
                  {getTimeShortFormat(messageInfo?.createdAt)}
                </div>
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default ChatList;
