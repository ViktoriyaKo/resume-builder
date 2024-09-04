import { LanguagesType } from '@/types/types';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/providers/TranslationsProvider';
import ClientAccountPage from './ClientAccountPage';
import { getUserResume } from '../services';
import { ResumeItemFiltersInput } from '@/graphql/gql/graphql';

const namespaces = ['account'];

const AccountPage = async (props: LanguagesType) => {
  const { lang } = props;
  const { resources } = await initTranslations({
    lang,
    namespaces,
  });
  const data = (await getUserResume()) as ResumeItemFiltersInput[];

  return (
    <TranslationsProvider
      namespaces={namespaces}
      lang={lang}
      resources={resources}
    >
      <ClientAccountPage resume={data} />
    </TranslationsProvider>
  );
};

export default AccountPage;
