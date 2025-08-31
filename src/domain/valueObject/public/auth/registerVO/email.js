import { ResponseError } from '../../../../../error/ResponseError.js';

export default class Email {
  constructor(email) {
    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new ResponseError(400, 'Invalid email format');
    }
    if (email.length > 100) {
      throw new ResponseError(400, 'Email must not exceed 100 characters');
    }
    this.email = email;
  }
}
