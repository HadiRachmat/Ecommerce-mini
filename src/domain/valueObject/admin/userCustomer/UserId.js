import { ResponseError } from '../../../../error/ResponseError.js';

export default class UserId {
  constructor(userId) {
    if (!userId) {
      throw new ResponseError(400, 'USER_ID_IS_REQUIRED');
    }
    if (typeof userId !== 'number' || isNaN(Number(userId))) {
      throw new ResponseError(400, 'USER_ID_MUST_BE_A_NUMBER');
    }
    this.userId = userId;
  }
}
