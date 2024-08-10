import { FormData, ShortCategories } from '@/packages/edit/constants';
import EditableHeader from '../EditableHeader/EditableHeader';
import { TextArea } from '@/ui/atoms';
import { Controller } from 'react-hook-form';
import { updateShortField } from '@/packages/edit/store/shortFieldSlice';
import { TypeControllerProps } from '@/packages/edit/types';
import { useControl } from '@/packages/edit/contexts/ControlContext';

const Skills = (props: TypeControllerProps) => {
  const { dispatch } = props;
  const control = useControl();

  return (
    <>
      <EditableHeader
        category={ShortCategories.TITLES}
        name={FormData.SKILLS_TITLE}
        title="Skills"
        description={'Describe your skills'}
      />
      <Controller
        name={ShortCategories.SKILLS_DESCRIPTION}
        control={control}
        render={({ field }) => {
          const handleChange = (value: string) => {
            field.onChange(value);
            dispatch(
              updateShortField({
                category: ShortCategories.SKILLS_DESCRIPTION,
                value,
              })
            );
          };

          return (
            <TextArea
              rows={8}
              {...field}
              onChange={(e) => handleChange(e.target.value)}
            />
          );
        }}
      />
    </>
  );
};

export default Skills;
