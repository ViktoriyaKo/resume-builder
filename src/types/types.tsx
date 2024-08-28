import { Locales } from "@/i18n-config";

export type FormContactValues = { email: string; text: string };
export type RoutersType = { href: string; title: string }[];
export interface LanguagesType {
  lang: Locales;
}
