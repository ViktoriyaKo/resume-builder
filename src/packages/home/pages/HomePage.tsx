import {
  AdvantageEntity,
  TemplateEntity,
  StepEntity,
  UploadFileEntity,
} from '@/graphql/gql/graphql';
import {
  Hero,
  Description,
  Templates,
  Advantages,
  StepsList,
} from '../components';
import { getHomeData } from '../services/getHomeData';
import { LanguagesType } from '@/types/types';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/providers/TranslationsProvider';

const namespaces = ['home'];

const HomePage = async (props: LanguagesType) => {
  const { lang } = props;
  const data = await getHomeData(lang);
  const { resources } = await initTranslations({
    lang,
    namespaces,
  });

  const templates = data?.templates?.data as TemplateEntity[];
  const advantages = data?.advantages?.data as AdvantageEntity[];
  const steps = data?.steps?.data as StepEntity[];
  const stepsImage = data?.image?.data?.attributes?.stepsImage
    ?.data as UploadFileEntity[];

  return (
    <TranslationsProvider
      namespaces={namespaces}
      lang={lang}
      resources={resources}
    >
      <Hero />
      <Description />
      <Advantages advantages={advantages} />
      <StepsList steps={steps} images={stepsImage} />
      <Templates templates={templates} />
    </TranslationsProvider>
  );
};

export default HomePage;
