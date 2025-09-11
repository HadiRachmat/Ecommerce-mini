import { ResponseError } from '../../../../error/ResponseError.js';

export default class Phone {
  constructor(phone) {
    if (typeof phone !== 'string') {
      throw new ResponseError('Phone must be a string');
    }
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format
    if (!phoneRegex.test(phone)) {
      throw new ResponseError('Invalid phone number format');
    }
    this.phone = phone;
  }
}
