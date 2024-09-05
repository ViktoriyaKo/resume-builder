import { FormData } from '../constants';
import DataBuilder from './DataBuilder';

class Contact extends DataBuilder {
  data?: any;
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
  addPhoto() {
    return this.addField(
      'Upload photo',
      FormData.PHOTO,
      this.data?.[FormData.PHOTO],
      'file'
    );
  }
  addFirstName() {
    return this.addField(
      'First name',
      FormData.FIRST_NAME,
      this.data?.[FormData.FIRST_NAME]
    );
  }
  addLastName() {
    return this.addField(
      'Last name',
      FormData.LAST_NAME,
      this.data?.[FormData.LAST_NAME]
    );
  }
  addEmail() {
    return this.addField(
      'Email',
      FormData.EMAIL,
      this.data?.[FormData.EMAIL],
      'email'
    );
  }
  addPhone() {
    return this.addField(
      'Phone',
      FormData.PHONE,
      this.data?.[FormData.PHONE],
      'number'
    );
  }
  addCountry() {
    return this.addField(
      'Country',
      FormData.COUNTRY,
      this.data?.[FormData.COUNTRY]
    );
  }
  addCity() {
    return this.addField('City', FormData.CITY, this.data?.[FormData.CITY]);
  }
  addAddress() {
    return this.addField(
      'Address',
      FormData.ADDRESS,
      this.data?.[FormData.ADDRESS]
    );
  }
  addAdditionalInfo(caption: string, name: string) {
    return this.addField(caption, name, this.data?.[FormData.JOB_TITLE]);
  }
}

export default Contact;
