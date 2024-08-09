'use client';
import { Provider } from 'react-redux';
import { View, Editor } from '../components/organisms';
import styles from '../styles/EditPage.module.css';
import store from '../store/store';

const EditPage = () => {
  return (
    <Provider store={store}>
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
