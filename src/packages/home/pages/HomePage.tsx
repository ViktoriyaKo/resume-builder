import { AdvantageEntity, TemplateEntity } from '@/graphql/gql/graphql';
import { Hero, Description, Templates, Advantages } from '../components';
import { getHomeData } from '../services/getHomeData';
import { LanguagesType } from '@/types/types';

const HomePage = async (props: LanguagesType) => {
  const { lang } = props;
  const data = await getHomeData(lang);
  
  const templates = data?.templates?.data as TemplateEntity[];
  const advantages = data?.advantages?.data as AdvantageEntity[];

  return (
    <>
      <Hero />
      <Description />
      <Advantages advantages={advantages}/>
      <Templates templates={templates} />
    </>
  );
};

export default HomePage;
