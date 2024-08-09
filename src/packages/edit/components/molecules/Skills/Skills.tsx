import { FormData } from '@/packages/edit/constants';
import EditableHeader from '../EditableHeader/EditableHeader';
import { TextArea } from '@/ui/atoms';
import { Controller } from 'react-hook-form';
import { useControl } from '@/packages/edit/contexts/ControlContext';
import { useDispatch } from 'react-redux';
import { updateSimpleField } from '@/packages/edit/store/simpleFieldSlice';

const Skills = () => {
  const control = useControl();
  const dispatch = useDispatch();

  return (
    <>
      <EditableHeader
        category={FormData.SKILLS_DESCRIPTION}
        value={FormData.TITLES}
        title="Skills"
        description={'Describe your skills'}
      />
      <Controller
        name={FormData.SKILLS_DESCRIPTION}
        control={control}
        render={({ field }) => {
          const handleChange = (value: string) => {
            field.onChange(value);
            dispatch(
              updateSimpleField({
                category: FormData.SKILLS_DESCRIPTION,
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
