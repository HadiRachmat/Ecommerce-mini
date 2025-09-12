import { ResponseError } from '../../../../error/ResponseError.js';
import * as CONSTANT from '../../../../configuration/constant.js';

export default class Gender {
  constructor(gender) {
    const validatedGender = [CONSTANT.BASE_GENDER_FEMALE, CONSTANT.BASE_GENDER_MALE];
    if (typeof gender !== 'number' || typeof gender === 'string') {
      throw new ResponseError(400, 'invalid request: gender must be a number');
    }
    if (!validatedGender.includes(gender)) {
      throw new ResponseError(
        400,
        'gender must be one of the following values: ' + validatedGender.join(', ')
      );
    }
    this.gender = gender;
  }
}
