import EditableHeader from '../EditableHeader/EditableHeader';
import { TextArea } from '@/ui/atoms';

const Skills = () => {
  return (
    <>
      <EditableHeader title="Skills" description={'Add your skills'} />
      <TextArea rows={8} />
    </>
  );
};

export default Skills;
