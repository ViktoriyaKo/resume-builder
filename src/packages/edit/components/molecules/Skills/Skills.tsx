import { FormData, ShortCategories } from '@/packages/edit/constants';
import EditableHeader from '../EditableHeader/EditableHeader';
import { updateAdditionalField } from '@/packages/edit/store/shortFieldSlice';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { TextEditor } from '@/ui/atoms';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleChange = useCallback((value: string) => {
    dispatch(
      updateAdditionalField({
        category: ShortCategories.SKILLS_DESCRIPTION,
        value,
      })
    );
  }, []);

  return (
    <>
      <EditableHeader
        category={ShortCategories.TITLES}
        name={FormData.SKILLS_TITLE}
        title={t('skillsTitle')}
        description={t('description_skills')}
      />
      <TextEditor
        name={ShortCategories.SKILLS_DESCRIPTION}
        onChange={handleChange}
      />
    </>
  );
};

export default Skills;
