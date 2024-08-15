import { FormData, ShortCategories } from '@/packages/edit/constants';
import EditableHeader from '../EditableHeader/EditableHeader';
import { updateShortField } from '@/packages/edit/store/shortFieldSlice';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { ControlledTextEditor } from '@/ui/atoms';

const Skills = () => {
  const dispatch = useDispatch();

  const handleChange = useCallback((value: string) => {
    dispatch(
      updateShortField({ category: ShortCategories.SKILLS_DESCRIPTION, value })
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
      <ControlledTextEditor
        name={ShortCategories.SKILLS_DESCRIPTION}
        onChange={handleChange}
      />
    </>
  );
};

export default Skills;
