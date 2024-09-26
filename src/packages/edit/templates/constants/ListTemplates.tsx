import { Resume as SimpleResume } from '../simple/simple1';
import { Resume as ModernResume } from '../modern';
import { Resume as DesignerResume } from '../designer';
import { Resume as Simple2Resume } from '../simple/simple2';
import { Resume as Simple3Resume } from '../simple/simple3';

const ListTemplates: { [key: string]: JSX.Element } = {
  simple1: <SimpleResume />,
  simple2: <Simple2Resume />,
  simple3: <Simple3Resume />,
  modern1: <ModernResume />,
  designer1: <DesignerResume />,
};
export default ListTemplates;
