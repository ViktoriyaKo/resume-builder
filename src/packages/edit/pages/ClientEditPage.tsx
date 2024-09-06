'use client';
import { Provider } from 'react-redux';
import { DocumentPreview, DocumentEditor } from '../components/organisms';
import styles from '../styles/EditPage.module.css';
import store from '@/store/store';
import { useSearchParams } from 'next/navigation';
import { paramsVariables } from '@/constants';

interface IProps {
  resume: string;
}

const ClientEditPage = (props: IProps) => {
  const { resume } = props;
  const searchParams = useSearchParams();
  const currentTemplate = searchParams.get(paramsVariables.DESIGN) ?? 'simple';

  return (
    <Provider store={store}>
      <section className={styles.container}>
        <div className={styles.editor}>
          <DocumentEditor currentTemplate={currentTemplate} resume={resume} />
        </div>
        <div className={styles.view}>
          <DocumentPreview currentTemplate={currentTemplate} />
        </div>
      </section>
    </Provider>
  );
};

export default ClientEditPage;
