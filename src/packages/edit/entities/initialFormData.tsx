import { FormData } from '../constants';
import { DataBuilder, Contact, Experience } from '../models';

export const EMPLOYMENT_ENTITY = (data: any) =>
  new Experience(data)
    .addJob()
    .addEmployer()
    .addStartDate()
    .addEndDate()
    .addCity()
    .addDescription()
    .build();

export const EDUCATION_ENTITY = (data: any) =>
  new Experience(data)
    .addSchool()
    .addSpecialty()
    .addDegree()
    .addStartDate()
    .addEndDate()
    .addDescription()
    .build();

export const COURSE_ENTITY = (data: any) =>
  new Experience(data)
    .addSchool()
    .addSpecialty()
    .addStartDate()
    .addEndDate()
    .addCity()
    .addDescription()
    .build();

export const CONTACT_ENTITY = (data: any) =>
  new Contact(data)
    .addJob()
    .addPhoto()
    .addFirstName()
    .addLastName()
    .addEmail()
    .addPhone()
    .addCountry()
    .addCity()
    .build();

export const ADDITIONAL_CONTACT_ENTITY = (data: any) =>
  new Contact(data)
    .addAddress()
    .addAdditionalInfo('Driving License', FormData.DRIVING_LICENSE)
    .build();

export const LANGUAGES_ENTITY = (data: any) =>
  new DataBuilder()
    .addField(
      'Language',
      FormData.LANGUAGES_NAME,
      data?.[FormData.LANGUAGES_NAME]
    )
    .addField(
      'Level',
      FormData.LANGUAGES_LEVEL,
      data?.[FormData.LANGUAGES_LEVEL],
      'select'
    )
    .build();

export const LINKS_ENTITY = (data: any) =>
  new DataBuilder()
    .addField('Label', FormData.LABEL, data?.[FormData.LABEL])
    .addField('Link', FormData.LINK, data?.[FormData.LABEL])
    .build();

export const TITLES = new DataBuilder()
  .addField('Social links & Websites', FormData.LINK_TITLE, '')
  .addField('Skills', FormData.SKILLS_TITLE, '')
  .addField('Professional Summary', FormData.SUMMARY_TITLE, '')
  .addField('Personal Details', FormData.PERSONAL_TITLE, '')
  .addField('Education', FormData.EDUCATION_TITLE, '')
  .addField('Employment History', FormData.EMPLOYMENT_TITLE, '')
  .addField('Courses', FormData.COURSES_TITLE, '')
  .addField('Languages', FormData.LANGUAGES_TITLE, '')
  .build();

// todo: переделать:

export const SELECT_LANGUAGES_ENTITY = [
  { caption: 'Choose level', value: '' },
  { caption: 'A1', value: 'A1' },
  { caption: 'A2', value: 'A2' },
  { caption: 'B1', value: 'B1' },
  { caption: 'B2', value: 'B2' },
  { caption: 'C1', value: 'C1' },
  { caption: 'C2', value: 'C2' },
];
