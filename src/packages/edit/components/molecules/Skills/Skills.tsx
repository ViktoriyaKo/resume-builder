import { FormData, ShortCategories } from '@/packages/edit/constants';
import EditableHeader from '../EditableHeader/EditableHeader';
import { updateAdditionalField } from '@/packages/edit/store/shortFieldSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { TextEditor } from '@/ui/atoms';
import { useTranslation } from 'react-i18next';
import { getStateShortData } from '@/packages/edit/store/shortFieldSlice';


const Skills = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { skillsDescription  } = useSelector(getStateShortData);

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
        defaultValue={skillsDescription}
        name={ShortCategories.SKILLS_DESCRIPTION}
        onChange={handleChange}
      />
    </>
  );
};

export default Skills;
