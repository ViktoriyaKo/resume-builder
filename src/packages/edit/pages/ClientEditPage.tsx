'use client';
import { Provider } from 'react-redux';
import { DocumentEditor, DocumentPreview } from '../components/organisms';
import styles from '../styles/EditPage.module.css';
import store from '@/store/store';
import { useSearchParams } from 'next/navigation';
import { paramsVariables } from '@/constants';
import EditTemplateProvider from '../context/EditTemplateContext';
import { TemplateEntity } from '@/graphql/gql/graphql';

interface IProps {
  resume: string;
  templates: TemplateEntity[];
}

const ClientEditPage = (props: IProps) => {
  const { resume, templates } = props;
  const searchParams = useSearchParams();
  const currentTemplate = searchParams.get(paramsVariables.DESIGN) ?? 'simple1';

  return (
    <Provider store={store}>
      <EditTemplateProvider value={templates}>
        <section className={styles.container}>
          <div className={styles.editor}>
            <DocumentEditor currentTemplate={currentTemplate} resume={resume} />{' '}
          </div>
          <div className={styles.view}>
            <DocumentPreview
              resume={resume}
              currentTemplate={currentTemplate}
            />
          </div>
        </section>
      </EditTemplateProvider>
    </Provider>
  );
};

export default ClientEditPage;
