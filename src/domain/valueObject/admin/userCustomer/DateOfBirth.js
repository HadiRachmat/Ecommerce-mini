import { ResponseError } from '../../../../error/ResponseError.js';

export default class DateOfBirth {
  constructor(dateOfBirth) {
    const date = new Date(dateOfBirth);
    if (isNaN(date.getTime())) {
      throw new ResponseError(400, 'date of birth must be a valid date');
    }

    const today = new Date();
    if (date > today) {
      throw new ResponseError(400, 'date of birth cannot be in the future');
    }

    const age = this.#callculateAge(date, today);
    if (age < 17) {
      throw new ResponseError(400, 'user must be at least 17 years old');
    }

    this.dateOfBirth = date;
  }
  #callculateAge(birthDate, today) {
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  
  toValue() {
    return this.dateOfBirth;
  }
}
