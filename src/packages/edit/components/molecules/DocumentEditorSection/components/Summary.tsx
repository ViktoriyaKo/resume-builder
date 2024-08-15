import { FormData, ShortCategories } from '@/packages/edit/constants';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { updateAdditionalField } from '@/packages/edit/store/shortFieldSlice';
import EditableHeader from '../../EditableHeader/EditableHeader';
import { TextEditor } from '@/ui/atoms';

const Summary = () => {
  const dispatch = useDispatch();

  const handleChange = useCallback((value: string) => {
    dispatch(
      updateAdditionalField({ category: ShortCategories.SUMMARY, value })
    );
  }, []);

  return (
    <>
      <EditableHeader
        category={ShortCategories.TITLES}
        name={FormData.SUMMARY_TITLE}
        title="Professional Summary"
        description={`Craft several energetic sentences highlighting your strengths. Specify your role, what you accomplished, and major achievements. Explain your motivation and list your key skills.`}
      />
      <TextEditor
        name={ShortCategories.SUMMARY}
        caption={`Recruiter tip: write 400-600 characters to increase interview chances`}
        onChange={handleChange}
      />
    </>
  );
};

export default Summary;
