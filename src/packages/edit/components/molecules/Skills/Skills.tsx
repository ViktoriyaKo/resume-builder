import { FormData } from '@/packages/edit/constants';
import EditableHeader from '../EditableHeader/EditableHeader';
import { TextArea } from '@/ui/atoms';

const Skills = (props) => {
  const { control } = props;
  return (
    <>
      <EditableHeader
        control={control}
        value={FormData.SKILLS_TITLE}
        title="Skills"
        description={'Describe your skills'}
      />
      <TextArea rows={8} />
    </>
  );
};

export default Skills;
