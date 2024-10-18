'use client';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

interface ModalContextType {
  isOpenModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}
const ModalContext = createContext<ModalContextType | null>(null);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenModal, setOpenModal] = useState(false);

  const contextValue = useMemo(
    () => ({
      isOpenModal,
      setOpenModal,
    }),
    [isOpenModal]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};

export default ModalProvider;
