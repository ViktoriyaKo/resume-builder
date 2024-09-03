import styles from './Content.module.css';
import { useTranslation } from 'react-i18next';
import { Icon, AddIcon, CustomLink, MenuContext } from '@/ui/atoms';
import clsx from 'clsx';
import ResumeCard from '../ResumeCard/ResumeCard';
import { useRef, useState, useCallback, MouseEvent } from 'react';
import { useOnClickOutside } from '@/hooks';

interface IOptions {
  name: string;
  handleClick: () => void;
}

const Content = () => {
  // TODO add cards !!!!
  const cards: any[] = [];
  // TODO add cards !!!!
  const { t } = useTranslation();
  const contextMenuRef = useRef<HTMLDivElement>(null);
  const [contextMenu, setContextMenu] = useState({
    position: { x: 0, y: 0 },
    options: [],
    isToggled: false,
  });

  const handleContextMenu = useCallback(
    (event: MouseEvent<HTMLImageElement>, options: IOptions[]) => {
      event.preventDefault();

      if (contextMenuRef.current) {
        const menuAttributes = contextMenuRef.current.getBoundingClientRect();

        const isLeft = event.clientX < window?.innerWidth - 300;
        const scrollX = window?.scrollX;
        const scrollY = window?.scrollY;

        let x;
        let y = event.clientY + scrollY;
        if (isLeft) {
          x = event.clientX + scrollX;
        } else {
          x = event.clientX - menuAttributes.width + scrollX;
        }
        setContextMenu({ position: { x, y }, options, isToggled: true });
      }
    },
    []
  );

  useOnClickOutside(contextMenuRef, () => {
    if (contextMenuRef.current) {
      setContextMenu({ ...contextMenu, isToggled: false });
    }
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <CustomLink
          href={'/edit'}
          className={clsx(styles.empty, styles.card)}
          prefix={
            <>
              <p className={styles.title}>{t('create_resume')}</p>
              <Icon html={AddIcon} />
            </>
          }
        ></CustomLink>
        {cards &&
          cards.length > 0 &&
          cards?.map((item) => {
            return (
              <ResumeCard
                onContextMenu={handleContextMenu}
                key={item.id}
                {...item}
              />
            );
          })}
      </div>
      <MenuContext {...contextMenu} contextMenuRef={contextMenuRef} />
    </div>
  );
};

export default Content;
