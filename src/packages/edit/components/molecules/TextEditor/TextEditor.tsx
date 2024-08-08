import { useControl } from '@/packages/edit/contexts/ControlContext';
import { Controller } from 'react-hook-form';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

interface IProps {
  name: string;
}

const TextEditor = (props: IProps) => {
  const control = useControl();
  const { name } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <ReactQuill theme="snow" {...field} ref={null} />}
    />
  );
};

export default TextEditor;
