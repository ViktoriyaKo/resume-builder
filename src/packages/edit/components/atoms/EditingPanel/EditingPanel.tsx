import { useEditTemplateContext } from '@/packages/edit';
import { AsideTemplates } from '../../molecules';
import { DocumentEditor } from '../../organisms';

interface IProps {
  resume: string;
  currentTemplate: string;
}

const EditingPanel = (props: IProps) => {
  const { resume, currentTemplate } = props;
  const { isEditorTemplate } = useEditTemplateContext();

  return isEditorTemplate ? (
    <AsideTemplates />
  ) : (
    <DocumentEditor currentTemplate={currentTemplate} resume={resume} />
  );
};

export default EditingPanel;
