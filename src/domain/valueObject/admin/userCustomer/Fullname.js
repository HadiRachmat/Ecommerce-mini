import { ResponseError } from '../../../../error/ResponseError.js';

export default class Fullname {
  constructor(fullname) {
    if (typeof fullname !== 'string') {
      throw new ResponseError(400, 'FULLNAME_MUST_BE_A_STRING');
    }
    if (fullname.length < 3 || fullname.length > 50) {
      throw new ResponseError(400, 'FULLNAME_LENGTH_MUST_BE_BETWEEN_3_AND_50_CHARACTERS');
    }
    this.fullname = fullname;
  }
}
