import { ResponseError } from '../../../../error/ResponseError.js';

export default class PlaceOfBirth {
  constructor(placeOfBirth) {
    if (typeof placeOfBirth !== 'string') {
      throw new ResponseError(400, 'place of birth must be a string');
    }
    if (placeOfBirth.length < 3 || placeOfBirth.length > 50) {
      throw new ResponseError(400, 'place of birth length must be between 3 and 50 characters');
    }
    this.placeOfBirth = placeOfBirth;
  }
}
