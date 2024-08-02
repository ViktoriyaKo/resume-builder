'use client';

import { TextArea } from '@/ui/atoms';
import { EditableHeader } from '../../molecules';
import styles from './Editor.module.css';

import {
  contactData,
  courseData,
  educationData,
  employmentData,
  linksData,
  languagesData,
  selectLanguagesData,
} from '@/packages/edit/store/store';
import ContactDetails from '../../molecules/ContactDetails/ContactDetails';
import EmploymentDetails from '../../molecules/EmploymentDetails/EmploymentDetails';
import EducationDetails from '../../molecules/EducationDetails/EducationDetails';
import LinksDetails from '../../molecules/LinksDetails/LinksDetails';
import Skills from '../../molecules/Skills/Skills';
import CoursesDetails from '../../molecules/CoursesDetails/CoursesDetails';
import Languages from '../../molecules/Languages/Languages';

const Editor = () => {
  return (
    <article className={styles.article}>
      <ContactDetails data={contactData} />
      <EditableHeader
        title="Professional Summary"
        description={`Craft several energetic sentences highlighting your strengths. Specify your role, what you accomplished, and major achievements. Explain your motivation and list your key skills.`}
      />
      <TextArea
        caption={`Recruiter tip: write 400-600 characters to increase interview chances`}
      />
      <EmploymentDetails data={employmentData} />
      <EducationDetails data={educationData} />
      <Skills />
      <LinksDetails data={linksData} />
      <CoursesDetails data={courseData} />
      <Languages data={languagesData} options={selectLanguagesData} />
    </article>
  );
};

export default Editor;
