import { ResponseError } from '../../../../error/ResponseError.js';

export default class UserId {
  constructor(userId) {
    if (!userId || isNaN(Number(userId))) {
      throw new ResponseError('Invalid userId: must be a non-empty numeric value');
    }
    this.userId = Number(userId);
  }
}
