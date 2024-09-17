import { PrivacyPage } from '@/packages/privacy';
import { LanguagesType } from '@/types/types';

async function Privacy({ params: { lang } }: { params: LanguagesType }) {
  return <PrivacyPage lang={lang} />;
}

export default Privacy;
