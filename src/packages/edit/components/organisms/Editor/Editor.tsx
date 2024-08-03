'use client';

import { TextArea } from '@/ui/atoms';
import { EditableHeader } from '../../molecules';
import styles from './Editor.module.css';

import { selectLanguagesData } from '@/packages/edit/store/store';
import ContactDetails from '../../molecules/ContactDetails/ContactDetails';
import EmploymentDetails from '../../molecules/EmploymentDetails/EmploymentDetails';
import EducationDetails from '../../molecules/EducationDetails/EducationDetails';
import LinksDetails from '../../molecules/LinksDetails/LinksDetails';
import Skills from '../../molecules/Skills/Skills';
import CoursesDetails from '../../molecules/CoursesDetails/CoursesDetails';
import Languages from '../../molecules/Languages/Languages';
import { useDispatch, useSelector } from 'react-redux';
import { getStateData } from '@/packages/edit/store/dataSlice';
import { useForm, Controller } from 'react-hook-form';
import { FormData } from '@/packages/edit/constants';
import ControlProvider from '@/packages/edit/contexts/ControlContext';
import { useEffect } from 'react';
import { updateData } from '@/packages/edit/store/formDataSlice';

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

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => console.log(data);

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
        <EditableHeader
          value={FormData.SUMMARY_TITLE}
          title="Professional Summary"
          description={`Craft several energetic sentences highlighting your strengths. Specify your role, what you accomplished, and major achievements. Explain your motivation and list your key skills.`}
        />
        <Controller
          name={FormData.SUMMARY}
          control={control}
          render={({ field }) => (
            <TextArea
              caption={`Recruiter tip: write 400-600 characters to increase interview chances`}
              {...field}
            />
          )}
        />
        <EmploymentDetails data={employmentData} />
        <EducationDetails data={educationData} />
        <Skills />
        <LinksDetails data={linksData} />
        <CoursesDetails data={courseData} />
        <Languages data={languagesData} options={selectLanguagesData} />
      </form>
    </ControlProvider>
  );
};

export default Editor;
