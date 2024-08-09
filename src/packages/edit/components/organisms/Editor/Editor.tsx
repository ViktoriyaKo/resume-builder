'use client';

import styles from './Editor.module.css';
import { selectLanguagesData } from '@/packages/edit/store/initialFormDataStore';
import { useSelector } from 'react-redux';
import { getStateData } from '@/packages/edit/store/dataSlice';
import { useForm } from 'react-hook-form';
import ControlProvider from '@/packages/edit/contexts/ControlContext';
import { ContactDetails, Skills } from '../../molecules';
import EditorBlock from '../../molecules/EditorItems/EditorItems';

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

  const { handleSubmit, control } = useForm({});

  const onSubmit = () => {
    // add action
    return;
  };

  return (
    <ControlProvider value={control}>
      <form className={styles.article} onSubmit={handleSubmit(onSubmit)}>
        <ContactDetails data={contactData} />
        <EditorBlock.Summary control={control} />
        <EditorBlock.Employment data={employmentData} />
        <EditorBlock.Education data={educationData} />
        <Skills />
        <EditorBlock.Links data={linksData} />
        <EditorBlock.Courses data={courseData} />
        <EditorBlock.Languages
          data={languagesData}
          options={selectLanguagesData}
        />
      </form>
    </ControlProvider>
  );
};

export default Editor;
