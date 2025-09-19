import { ResponseError } from '../../../../error/ResponseError.js';

export default class Name {
  constructor(name) {
    if (!name) throw new ResponseError(400, 'Name is required');
    if (name.length < 3) throw new ResponseError(400, 'Name must be at least 3 characters long');
    if (name.length > 50) throw new ResponseError(400, 'Name must be less than 50 characters long');
    this.name = name;
  }
}
