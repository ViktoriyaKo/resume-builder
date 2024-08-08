'use client';

import styles from './Editor.module.css';
import { selectLanguagesData } from '@/packages/edit/store/initialFormDataStore';
import { useDispatch, useSelector } from 'react-redux';
import { getStateData } from '@/packages/edit/store/dataSlice';
import { useForm } from 'react-hook-form';
import ControlProvider from '@/packages/edit/contexts/ControlContext';
import { useEffect } from 'react';
import { updateData } from '@/packages/edit/store/formDataSlice';
import { ContactDetails, Skills } from '../../molecules';
import EditorBlock from '../../molecules/EditorItems/EditorItems';

const Editor = () => {
  const initialData = useSelector(getStateData);
  const dispatch = useDispatch();

  const {
    contactData,
    courseData,
    educationData,
    employmentData,
    languagesData,
    linksData,
  } = initialData;

  const { handleSubmit, control, watch } = useForm({});

  const onSubmit = () => {
    return;
  };

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name?.includes('.')) {
        const [parentField, fieldName] = name.split('.');
        const newData = {
          [parentField]: {
            ...value[parentField],
            [fieldName]: value[parentField][fieldName],
          },
        };
        dispatch(updateData({ data: newData, category: parentField }));
      } else {
        dispatch(updateData({ data: { [name]: value[name] } }));
      }
    });
    return () => subscription.unsubscribe();
  }, [dispatch, watch]);

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
