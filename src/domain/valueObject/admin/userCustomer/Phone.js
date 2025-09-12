import { ResponseError } from '../../../../error/ResponseError.js';

export default class Phone {
  constructor(phone) {
    if (typeof phone !== 'string') {
      throw new ResponseError(400, 'PHONE_MUST_BE_A_STRING');
    }
    if (phone.length < 10 || phone.length > 15) {
      throw new ResponseError(400, 'PHONE_LENGTH_MUST_BE_BETWEEN_10_AND_15_CHARACTERS');
    }
    if (!/^\+?[0-9]+$/.test(phone)) {
      throw new ResponseError(400, 'PHONE_MUST_CONTAIN_ONLY_NUMBERS_AND_OPTIONAL_LEADING_PLUS');
    }
    this.phone = phone;
  }
}
