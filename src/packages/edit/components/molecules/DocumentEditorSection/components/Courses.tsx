import { Categories, FormData } from '@/packages/edit/constants';
import ItemContent from './Content';
import { IDataEditorItems } from '@/packages/edit/types';
import { useTranslation } from 'react-i18next';

const Courses = (props: IDataEditorItems) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <ItemContent
      value={FormData.COURSES_TITLE}
      description={t('description_courses')}
      data={data}
      titleAccordion={t('your_course')}
      category={Categories.COURSE}
      labelButton={`+ ${t('add_course')}`}
    />
  );
};
export default Courses;
