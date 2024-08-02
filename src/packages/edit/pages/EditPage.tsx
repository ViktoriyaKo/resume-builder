import { View, Editor } from '../components/organisms';
import styles from '../styles/EditPage.module.css';

const EditPage = async () => {
  return (
    <section className={styles.container}>
      <div className={styles.editor}>
        <Editor />
      </div>
      <div className={styles.view}>
        <View />
      </div>
    </section>
  );
};

export default EditPage;
