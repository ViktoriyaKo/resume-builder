import { Resume as SimpleResume } from '../simple';
import { Resume as ModernResume } from '../modern';
import { Resume as DesignerResume } from '../designer';
import { Resume as Simple2Resume } from '../simple2';

const ListTemplates: { [key: string]: JSX.Element } = {
  simple1: <SimpleResume />,
  simple2: <Simple2Resume />,
  modern1: <ModernResume />,
  designer1: <DesignerResume />,
};
export default ListTemplates;
