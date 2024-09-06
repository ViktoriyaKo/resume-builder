import { FormData } from '../constants';
import { DataBuilder, Contact, Experience } from '../models';

export const EMPLOYMENT_ENTITY = new Experience()
  .addJob()
  .addEmployer()
  .addStartDate()
  .addEndDate()
  .addCity()
  .addDescription()
  .build();

export const EDUCATION_ENTITY = new Experience()
  .addSchool()
  .addSpecialty()
  .addDegree()
  .addStartDate()
  .addEndDate()
  .addDescription()
  .build();

export const COURSE_ENTITY = new Experience()
  .addSchool()
  .addSpecialty()
  .addStartDate()
  .addEndDate()
  .addCity()
  .addDescription()
  .build();

export const CONTACT_ENTITY = new Contact()
  .addJob()
  .addPhoto()
  .addFirstName()
  .addLastName()
  .addEmail()
  .addPhone()
  .addCountry()
  .addCity()
  .build();

export const ADDITIONAL_CONTACT_ENTITY = new Contact()
  .addAddress()
  .addAdditionalInfo('Driving License', FormData.DRIVING_LICENSE)
  .build();

export const LANGUAGES_ENTITY = new DataBuilder()
  .addField('Language', FormData.LANGUAGES_NAME)
  .addField('Level', FormData.LANGUAGES_LEVEL, 'select')
  .build();

export const LINKS_ENTITY = new DataBuilder()
  .addField('Label', FormData.LABEL)
  .addField('Link', FormData.LINK)
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
