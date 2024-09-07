import { FormData, ShortCategories } from '@/packages/edit/constants';
import EditableHeader from '../EditableHeader/EditableHeader';
import { TextEditor } from '@/ui/atoms';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <>
      <EditableHeader
        category={ShortCategories.TITLES}
        name={FormData.SKILLS_TITLE}
        description={t('description_skills')}
      />
      <TextEditor name={ShortCategories.SKILLS_DESCRIPTION} />
    </>
  );
};

export default Skills;
