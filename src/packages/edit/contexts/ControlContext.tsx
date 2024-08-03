'use client';
import { createContext, useContext } from 'react';
import { Control, FieldValues } from 'react-hook-form';

const ControlContext = createContext<Control<FieldValues, any> | null>(null);

const ControlProvider = ({
  value,
  children,
}: {
  value: Control<FieldValues, any>;
  children: React.ReactNode;
}) => {
  return (
    <ControlContext.Provider value={value}>{children}</ControlContext.Provider>
  );
};

export const useControl = () => {
  const context = useContext(ControlContext);
  if (!context) {
    throw new Error('useControl must be used within a ControlProvider');
  }
  return context;
};

export default ControlProvider;
