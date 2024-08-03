'use client';
import { Provider } from 'react-redux';
import { View, Editor } from '../components/organisms';
import styles from '../styles/EditPage.module.css';
import configStore from '../store/configStore';

const EditPage = () => {
  return (
    <Provider store={configStore}>
      <section className={styles.container}>
        <div className={styles.editor}>
          <Editor />
        </div>
        <div className={styles.view}>
          <View />
        </div>
      </section>
    </Provider>
  );
};

export default EditPage;
