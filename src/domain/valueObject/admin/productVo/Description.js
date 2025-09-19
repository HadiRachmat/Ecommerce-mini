import { ResponseError } from '../../../../error/ResponseError.js';

export default class Description {
  constructor(description) {
    if (description !== undefined && description !== null) {
      if (typeof description !== 'string') {
        throw new ResponseError(400, 'Description must be a string');
      }
      if (description.length > 255) {
        throw new ResponseError(400, 'Description must be less than 255 characters long');
      }
    }
    this.description = description;
  }
}
