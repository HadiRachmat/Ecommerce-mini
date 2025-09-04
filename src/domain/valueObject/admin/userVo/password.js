import { ResponseError } from '../../../../error/ResponseError.js';
export default class Password {
  constructor(password) {
    if (typeof password !== 'string' || password.length < 8) {
      throw new ResponseError(400, 'Password must be a string with at least 8 characters');
    }
    if (!/[A-Z]/.test(password)) {
      throw new ResponseError(400, 'Password must contain at least one uppercase letter');
    }
    if (!/[a-z]/.test(password)) {
      throw new ResponseError(400, 'Password must contain at least one lowercase letter');
    }
    if (!/[0-9]/.test(password)) {
      throw new ResponseError(400, 'Password must contain at least one digit', 400);
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      throw new ResponseError(400, 'Password must contain at least one special character');
    }
    this.password = password;
  }
}
