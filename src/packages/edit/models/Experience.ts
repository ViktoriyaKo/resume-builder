import { FormData } from '../constants';
import DataBuilder from './DataBuilder';

class Experience extends DataBuilder {
  data: any;
  constructor(data: any) {
    super();
    this.data = data;
  }
  addJob() {
    return this.addField(
      'Job title',
      FormData.JOB_TITLE,
      this.data?.[FormData.JOB_TITLE]
    );
  }
  addSpecialty() {
    return this.addField(
      'Specialty',
      FormData.SPECIALTY,
      this.data?.[FormData.SPECIALTY]
    );
  }
  addSchool() {
    return this.addField(
      'School',
      FormData.SCHOOL,
      this.data?.[FormData.SCHOOL]
    );
  }
  addDegree() {
    return this.addField(
      'Degree',
      FormData.DEGREE,
      this.data?.[FormData.DEGREE]
    );
  }
  addEmployer() {
    return this.addField(
      'Employer',
      FormData.EMPLOYER,
      this.data?.[FormData.EMPLOYER]
    );
  }
  addStartDate() {
    return this.addField(
      'Start date',
      FormData.START_DATE,
      this.data?.[FormData.START_DATE],
      'date'
    );
  }
  addEndDate() {
    return this.addField(
      'End date',
      FormData.END_DATE,
      this.data?.[FormData.END_DATE],
      'date'
    );
  }
  addCity() {
    return this.addField('City', FormData.CITY, this.data?.[FormData.CITY]);
  }
  addDescription() {
    return this.addField(
      'Description',
      FormData.DESCRIPTION,
      this.data?.[FormData.DESCRIPTION],
      'textArea'
    );
  }
}

export default Experience;
