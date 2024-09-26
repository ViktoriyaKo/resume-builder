import { FormData } from '../constants';
import DataBuilder from './DataBuilder';

class Contact extends DataBuilder {
  addJob() {
    return this.addField('Job title', FormData.JOB_TITLE);
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
    return this.addField('Phone', FormData.PHONE);
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

export default Contact;
