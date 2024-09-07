import { useCallback, useRef } from 'react';

const useDebounce = <T extends (...args: any) => ReturnType<T>>(
  cb: (...args: Parameters<T>) => ReturnType<T>,
  delay = 1000
) => {
  const timeout = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeout.current) clearTimeout(timeout.current);

      timeout.current = setTimeout(() => {
        return cb(...args);
      }, delay);
    },
    [cb, delay]
  );
};

export default useDebounce;
