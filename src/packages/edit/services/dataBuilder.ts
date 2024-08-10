import { FormData } from '../constants';

abstract class Builder {
  abstract addField(caption: string, name: string, type: string): this;
  abstract build(): { caption: string; name: string; type: string }[];
}

export class DataBuilder extends Builder {
  private fields: { caption: string; name: string; type: string }[] = [];
  private defaultType: string = 'text';

  addField(caption: string, name: string, type?: string): this {
    this.fields.push({ name, caption, type: type ? type : this.defaultType });
    return this;
  }

  build(): { caption: string; name: string; type: string }[] {
    return this.fields;
  }
}

export class Contact extends DataBuilder {
  addJob() {
    return this.addField('Job title', FormData.JOB_TITLE);
  }
  addPhoto() {
    return this.addField('Upload photo', FormData.PHOTO, 'file');
  }
  addFirstName() {
    return this.addField('First name', FormData.FIRST_NAME);
  }
  addLastName() {
    return this.addField('Last name', FormData.LAST_NAME);
  }
  addEmail() {
    return this.addField('Email', FormData.EMAIL, 'email');
  }
  addPhone() {
    return this.addField('Phone', FormData.PHONE, 'number');
  }
  addCountry() {
    return this.addField('Country', FormData.COUNTRY);
  }
  addCity() {
    return this.addField('City', FormData.CITY);
  }
  addAddress() {
    return this.addField('Address', FormData.ADDRESS);
  }
  addAdditionalInfo(caption: string, name: string) {
    return this.addField(caption, name);
  }
}

export class Experience extends DataBuilder {
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
    return this.addField(
      'Description',
      FormData.DESCRIPTION_SCHOOL,
      'textArea'
    );
  }
}
