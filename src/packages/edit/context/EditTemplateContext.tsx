'use client';

import { TemplateEntity } from '@/graphql/gql/graphql';
import { createContext, useContext, useState, ReactNode } from 'react';

interface EditTemplateContextType {
  templates: TemplateEntity[];
  isEditorTemplate: boolean;
  setEditorTemplate: (isEditorTemplate: boolean) => void;
}

const EditTemplateContext = createContext<EditTemplateContextType | null>(null);

const EditTemplateProvider = ({
  value,
  children,
}: {
  value: TemplateEntity[];
  children: ReactNode;
}) => {
  const [isEditorTemplate, setEditorTemplate] = useState<boolean>(false);

  const values: EditTemplateContextType = {
    templates: value,
    isEditorTemplate,
    setEditorTemplate,
  };

  return (
    <EditTemplateContext.Provider value={values}>
      {children}
    </EditTemplateContext.Provider>
  );
};

export const useEditTemplateContext = () => {
  const context = useContext(EditTemplateContext);
  if (!context) {
    throw new Error('error in outside of useEditTemplateContext');
  }
  return context;
};

export default EditTemplateProvider;
