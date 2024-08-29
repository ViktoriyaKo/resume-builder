import { ReactNode } from 'react';
import { i18n as I18nType } from 'i18next';

export type Locales = 'en' | 'ru' | 'pl';
export type FormContactValues = { email: string; text: string };
export type RoutersType = { href: string; title: string }[];
export interface LanguagesType {
  lang: Locales;
}

export interface TranslationsProviderProps {
  children: ReactNode;
  lang: string;
  namespaces: string[];
  resources: Record<string, any>;
}

export interface InitTranslationsParams {
  lang: string;
  namespaces: string[];
  i18nInstance?: I18nType;
  resources?: Record<string, any>;
}
