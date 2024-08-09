import { FormData } from '../constants';

export const contactData = [
  { caption: 'Job title', type: 'text', name: FormData.JOB },
  { caption: 'Upload photo', type: 'file', name: 'test' },
  { caption: 'First name', type: 'text', name: FormData.FIRST_NAME },
  { caption: 'Last name', type: 'text', name: FormData.LAST_NAME },
  { caption: 'Email', type: 'email', name: FormData.EMAIL },
  { caption: 'Phone', type: 'number', name: FormData.PHONE },
  { caption: 'Country', type: 'text', name: FormData.COUNTRY },
  { caption: 'City', type: 'text', name: FormData.CITY },
];

export const additionalContactData = [
  { caption: 'Address', type: 'text', name: FormData.ADDRESS },
  { caption: 'Driving License', type: 'text', name: FormData.DRIVING_LICENSE },
];

export const educationData = [
  { caption: 'School', type: 'text', name: FormData.SCHOOL },
  { caption: 'Specialty', type: 'text', name: FormData.SPECIALTY },
  { caption: 'Degree', type: 'text', name: FormData.DEGREE },
  { caption: 'Start date', type: 'date', name: FormData.START_DATE },
  { caption: 'End date', type: 'date', name: FormData.END_DATE },
  {
    caption: 'Description',
    type: 'textArea',
    name: FormData.DESCRIPTION_SCHOOL,
  },
];

export const courseData = [
  { caption: 'School', type: 'text', name: FormData.SCHOOL },
  { caption: 'Specialty', type: 'text', name: FormData.SPECIALTY },
  { caption: 'Start date', type: 'date', name: FormData.START_DATE },
  { caption: 'End date', type: 'date', name: FormData.END_DATE },
  { caption: 'City', type: 'text', name: FormData.CITY },
  {
    caption: 'Description',
    type: 'textArea',
    name: FormData.DESCRIPTION_SCHOOL,
  },
];

export const employmentData = [
  { caption: 'Job title', type: 'text', name: FormData.JOB_TITLE },
  { caption: 'Employer', type: 'text', name: FormData.EMPLOYER },
  { caption: 'Start date', type: 'date', name: FormData.START_DATE },
  { caption: 'End date', type: 'date', name: FormData.END_DATE },
  { caption: 'City', type: 'text', name: FormData.CITY },
  {
    caption: 'Description',
    type: 'textArea',
    name: FormData.DESCRIPTION_SCHOOL,
  },
];

export const linksData = [
  { caption: 'Label', type: 'text', name: FormData.LABEL },
  { caption: 'Link', type: 'text', name: FormData.LINK },
];

export const languagesData = [
  { caption: 'Language', type: 'text', name: FormData.LANGUAGES_NAME },
  { caption: 'Level', type: 'select', name: FormData.LANGUAGES_LEVEL },
];

export const selectLanguagesData = [
  { caption: 'A1', value: 'A1' },
  { caption: 'A2', value: 'A2' },
  { caption: 'B1', value: 'B1' },
  { caption: 'B2', value: 'B2' },
  { caption: 'C1', value: 'C1' },
  { caption: 'C2', value: 'C2' },
];

export const titles = [
  { caption: 'Social links & Websites', name: FormData.LINK_TITLE },
  { caption: 'Skills', name: FormData.SKILLS_TITLE },
  { caption: 'Professional Summary', name: FormData.SUMMARY_TITLE },
  { caption: 'Personal Details', name: FormData.PERSONAL_TITLE },
  { caption: 'Education', name: FormData.EDUCATION_TITLE },
  { caption: 'Employment History', name: FormData.EMPLOYMENT_TITLE },
  { caption: 'Courses', name: FormData.COURSES_TITLE },
  { caption: 'Languages', name: FormData.LANGUAGES_TITLE },
];
