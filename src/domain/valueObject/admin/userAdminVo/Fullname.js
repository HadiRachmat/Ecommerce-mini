import { ResponseError } from '../../../../error/ResponseError.js';

export default class Fullname {
  constructor(fullname) {
    if( typeof fullname !== 'string'){
      throw new ResponseError(400, 'Fullname must be a string');
    }
    if (fullname.length < 3 || fullname.length > 50) {
      throw new ResponseError(400, 'Fullname must be between 3 and 50 characters');
    }
    this.fullname = fullname;
  }
}
