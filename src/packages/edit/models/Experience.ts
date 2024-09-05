import { FormData } from '../constants';
import DataBuilder from './DataBuilder';

class Experience extends DataBuilder {
  addJob() {
    return this.addField('Job title', FormData.JOB_TITLE);
  }
  addSpecialty() {
    return this.addField('Specialty', FormData.SPECIALTY);
  }
  addSchool() {
    return this.addField('School', FormData.SCHOOL);
  }
  addDegree() {
    return this.addField('Degree', FormData.DEGREE);
  }
  addEmployer() {
    return this.addField('Employer', FormData.EMPLOYER);
  }
  addStartDate() {
    return this.addField('Start date', FormData.START_DATE, 'date');
  }
  addEndDate() {
    return this.addField('End date', FormData.END_DATE, 'date');
  }
  addCity() {
    return this.addField('City', FormData.CITY);
  }
  addDescription() {
    return this.addField('Description', FormData.DESCRIPTION, 'textArea');
  }
}

export default Experience;
