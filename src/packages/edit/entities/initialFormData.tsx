import { FormData } from '../constants';
import { DataBuilder, Contact, Experience } from '../services';

export const employmentData = new Experience()
  .addJob()
  .addEmployer()
  .addStartDate()
  .addEndDate()
  .addCity()
  .addDescription()
  .build();

export const educationData = new Experience()
  .addSchool()
  .addSpecialty()
  .addDegree()
  .addStartDate()
  .addEndDate()
  .addDescription()
  .build();

export const courseData = new Experience()
  .addSchool()
  .addSpecialty()
  .addStartDate()
  .addEndDate()
  .addCity()
  .addDescription()
  .build();

export const contactData = new Contact()
  .addJob()
  .addPhoto()
  .addFirstName()
  .addLastName()
  .addEmail()
  .addPhone()
  .addCountry()
  .addCity()
  .build();

export const additionalContactData = new Contact()
  .addAddress()
  .addAdditionalInfo('Driving License', FormData.DRIVING_LICENSE)
  .build();

export const languagesData = new DataBuilder()
  .addField('Language', FormData.LANGUAGES_NAME)
  .addField('Level', FormData.LANGUAGES_LEVEL, 'select')
  .build();

export const linksData = new DataBuilder()
  .addField('Label', FormData.LABEL)
  .addField('Link', FormData.LINK)
  .build();

export const titles = new DataBuilder()
  .addField('Social links & Websites', FormData.LINK_TITLE)
  .addField('Skills', FormData.SKILLS_TITLE)
  .addField('Professional Summary', FormData.SUMMARY_TITLE)
  .addField('Personal Details', FormData.PERSONAL_TITLE)
  .addField('Education', FormData.EDUCATION_TITLE)
  .addField('Employment History', FormData.EMPLOYMENT_TITLE)
  .addField('Courses', FormData.COURSES_TITLE)
  .addField('Languages', FormData.LANGUAGES_TITLE)
  .build();

// todo: переделать:

export const selectLanguagesData = [
  { caption: 'Choose level', value: '' },
  { caption: 'A1', value: 'A1' },
  { caption: 'A2', value: 'A2' },
  { caption: 'B1', value: 'B1' },
  { caption: 'B2', value: 'B2' },
  { caption: 'C1', value: 'C1' },
  { caption: 'C2', value: 'C2' },
];
