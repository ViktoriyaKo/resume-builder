import { Resume as SimpleResume } from '../simple';
import { Resume as ModernResume } from '../modern';
import { Resume as DesignerResume } from '../designer';

const ListTemplates: { [key: string]: JSX.Element } = {
  simple: <SimpleResume />,
  modern: <ModernResume />,
  designer: <DesignerResume />,
};
export default ListTemplates;
