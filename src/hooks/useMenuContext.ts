import { MouseEvent, RefObject, useCallback, useState } from 'react';
import { useOnClickOutside } from './useOnClickOutside';


//ref - MenuContext
export const useMenuContext = <T extends HTMLElement>(
  ref: RefObject<T>,
  initialOptions: any[],
  offset = 300,
) => {
  const [contextMenu, setContextMenu] = useState({
    position: { x: 0, y: 0 },
    options: initialOptions,
    isToggled: false,
  });

  const handleContextMenu = useCallback(
    (event: MouseEvent<T>, options: any[]) => {
      event.preventDefault();

      if (ref.current) {
        const menuAttributes = ref.current.getBoundingClientRect();

        const isLeft = event.clientX < window?.innerWidth - offset;
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

  useOnClickOutside(ref, () => {
    if (ref.current) {
      setContextMenu({ ...contextMenu, isToggled: false });
    }
  });

  return { handleContextMenu, ...contextMenu };
};
