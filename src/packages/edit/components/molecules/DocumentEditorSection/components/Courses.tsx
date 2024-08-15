import { Categories, FormData } from '@/packages/edit/constants';
import { COURSE_ENTITY } from '@/packages/edit/entities';
import ItemContent from './Content';
import { IDataEditorItems } from '@/packages/edit/types';

const Courses = (props: IDataEditorItems) => {
  const { data } = props;

  return (
    <ItemContent
      initialFormData={COURSE_ENTITY}
      value={FormData.COURSES_TITLE}
      header={'Courses'}
      description={'Show your Courses'}
      data={data}
      titleAccordion={'Your Course'}
      category={Categories.COURSE}
      labelButton={'+ Add one more course'}
    />
  );
};
export default Courses;
