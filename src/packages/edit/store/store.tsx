import { FormData } from '../constants';

export const contactData = [
  { caption: 'Job title', type: 'text', value: FormData.JOB },
  { caption: 'Upload photo', type: 'file', value: 'test' },
  { caption: 'First name', type: 'text', value: FormData.FIRST_NAME },
  { caption: 'Last name', type: 'text', value: FormData.LAST_NAME },
  { caption: 'Email', type: 'email', value: FormData.EMAIL },
  { caption: 'Phone', type: 'number', value: FormData.PHONE },
  { caption: 'Country', type: 'text', value: FormData.COUNTRY },
  { caption: 'City', type: 'text', value: FormData.CITY },
];

export const additionalContactData = [
  { caption: 'Address', id: 9, type: 'text' },
  { caption: 'Driving License', id: 10, type: 'text' },
];

export const educationData = [
  { caption: 'School', type: 'text' },
  { caption: 'Degree', type: 'text' },
  { caption: 'Start date', type: 'date' },
  { caption: 'End date', type: 'date' },
  { caption: 'City', type: 'text' },
  { caption: 'Description', type: 'textArea' },
];

export const courseData = [
  { caption: 'School', type: 'text' },
  { caption: 'Degree', type: 'text' },
  { caption: 'Start date', type: 'date' },
  { caption: 'End date', type: 'date' },
  { caption: 'City', type: 'text' },
  { caption: 'Description', type: 'textArea' },
];

export const employmentData = [
  { caption: 'Job title', type: 'text' },
  { caption: 'Employer', type: 'text' },
  { caption: 'Start date', type: 'date' },
  { caption: 'End date', type: 'date' },
  { caption: 'City', type: 'text' },
  { caption: 'Description', type: 'textArea' },
];

export const linksData = [
  { caption: 'Label', type: 'text' },
  { caption: 'Link', type: 'text' },
];

export const languagesData = [
  { caption: 'Language', type: 'text' },
  { caption: 'Level', type: 'select' },
];

export const selectLanguagesData = [
  { caption: 'A1', value: 'A1' },
  { caption: 'A2', value: 'A2' },
  { caption: 'B1', value: 'B1' },
  { caption: 'B2', value: 'B2' },
  { caption: 'C1', value: 'C1' },
  { caption: 'C2', value: 'C2' },
];
