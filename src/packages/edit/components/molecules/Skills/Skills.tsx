import { FormData } from '@/packages/edit/constants';
import EditableHeader from '../EditableHeader/EditableHeader';
import { TextArea } from '@/ui/atoms';
import { Controller } from 'react-hook-form';
import { useControl } from '@/packages/edit/contexts/ControlContext';

const Skills = () => {
  const control = useControl();

  return (
    <>
      <EditableHeader
        value={FormData.SKILLS_TITLE}
        title="Skills"
        description={'Describe your skills'}
      />
      <Controller
        name={FormData.SKILLS_DESCRIPTION}
        control={control}
        render={({ field }) => <TextArea rows={8} {...field} />}
      />
    </>
  );
};

export default Skills;
