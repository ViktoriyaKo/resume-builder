"use client"
import { Provider } from 'react-redux';
import { DocumentPreview, DocumentEditor } from '../components/organisms';
import styles from '../styles/EditPage.module.css';
import store from '@/store/store';

const ClientEditPage = () => {

  return ( 
      <Provider store={store}>
        <section className={styles.container}>
          <div className={styles.editor}>
            <DocumentEditor />
          </div>
          <div className={styles.view}>
            <DocumentPreview />
          </div>
        </section>
      </Provider>
  );
};

export default ClientEditPage;
