'use client';
import styles from './DocumentEditor.module.css';
import { SELECT_LANGUAGES_ENTITY } from '@/packages/edit/entities';
import { useSelector } from 'react-redux';
import { getStateData } from '@/packages/edit/store/dataSlice';
import { useForm } from 'react-hook-form';
import { ContactDetails, DocumentEditorSection, Skills } from '../../molecules';
import { ShortCategories } from '@/packages/edit/constants';

const Editor = () => {
  const initialData = useSelector(getStateData);

  const {
    contactData,
    courseData,
    educationData,
    employmentData,
    languagesData,
    linksData,
  } = initialData;

  const { handleSubmit } = useForm({});

  const onSubmit = () => {
    // add action
    return;
  };

  return (
    <form className={styles.article} onSubmit={handleSubmit(onSubmit)}>
      <ContactDetails data={contactData} />
      <DocumentEditorSection.Summary />
      <DocumentEditorSection.Employment data={employmentData} />
      <DocumentEditorSection.Education data={educationData} />
      <Skills />
      <DocumentEditorSection.Links data={linksData} />
      <DocumentEditorSection.Courses data={courseData} />
      <DocumentEditorSection.Languages
        data={languagesData}
        options={SELECT_LANGUAGES_ENTITY}
      />
      <div className={styles.wrapper}>
        <DocumentEditorSection.ColorInput
          caption={'Choose color for background:'}
          category={ShortCategories.BACKGROUND}
        />
        <DocumentEditorSection.ColorInput
          caption={'Choose main color:'}
          category={ShortCategories.COLOR}
        />
      </div>
    </form>
  );
};

export default Editor;
