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
import { useSelector } from 'react-redux';
import { getStateData } from '@/packages/edit/store/dataSlice';
import { useForm, Controller } from 'react-hook-form';
import { FormData } from '@/packages/edit/constants';

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

  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => console.log(data);
  // TODO вынести control в context!!!

  return (
    <form className={styles.article} onSubmit={handleSubmit(onSubmit)}>
      <ContactDetails control={control} data={contactData} />
      <EditableHeader
        value={FormData.SUMMARY_TITLE}
        control={control}
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
      <EmploymentDetails data={employmentData} control={control} />
      <EducationDetails data={educationData} control={control} />
      <Skills control={control} />
      <LinksDetails data={linksData} control={control} />
      <CoursesDetails data={courseData} control={control} />
      <Languages
        data={languagesData}
        options={selectLanguagesData}
        control={control}
      />
      <button>test!!!!</button>
    </form>
  );
};

export default Editor;
