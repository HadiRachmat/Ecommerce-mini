import { ResponseError } from '../../../../error/ResponseError.js';

export default class Name {
  constructor(name) {
    if (typeof name !== 'string' || name.trim().length === 0) {
      throw new ResponseError(400, 'Name must be a non-empty string');
    }
    if (name.length > 100) {
      throw new ResponseError(400, 'Name must not exceed 20 characters');
    }
    this.name = name;
  }
}
