import { ResponseError } from '../../../../error/ResponseError.js';

export default class Filetype {
  constructor(filetype) {
    if (typeof filetype !== 'string' || filetype.trim() === '') {
      throw new ResponseError(400, 'Filetype must be a non-empty string');
    }
    if (filetype.length > 50) {
      throw new ResponseError(400, 'Filetype must not exceed 50 characters');
    }
    this.filetype = filetype;
  }
}
