import { FormData, ShortCategories } from '@/packages/edit/constants';
import EditableHeader from '../EditableHeader/EditableHeader';
import { updateAdditionalField } from '@/packages/edit/store/shortFieldSlice';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { TextEditor } from '@/ui/atoms';

const Skills = () => {
  const dispatch = useDispatch();

  const handleChange = useCallback((value: string) => {
    dispatch(
      updateAdditionalField({ category: ShortCategories.SKILLS_DESCRIPTION, value })
    );
  }, []);

  return (
    <>
      <EditableHeader
        category={ShortCategories.TITLES}
        name={FormData.SKILLS_TITLE}
        title="Skills"
        description={'Describe your skills'}
      />
      <TextEditor
        name={ShortCategories.SKILLS_DESCRIPTION}
        onChange={handleChange}
      />
    </>
  );
};

export default Skills;
