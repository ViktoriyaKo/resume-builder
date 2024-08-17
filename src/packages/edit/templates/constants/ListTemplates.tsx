import { Resume as SimpleResume } from '../simple';
import { Resume as ModernResume } from '../modern';

const ListTemplates: { [key: string]: JSX.Element } = {
  simple: <SimpleResume />,
  modern: <ModernResume />,
};
export default ListTemplates;
