import * as CONSTANT from '../../../../configuration/constant.js';
import { ResponseError } from '../../../../error/ResponseError.js';
export default class Position {
  constructor(position) {
    const validatePosition = [
      CONSTANT.BASE_POSITION_CUSTOMER_SERVICE,
      CONSTANT.BASE_POSITION_FINANCE,
      CONSTANT.BASE_POSITION_WAREHOUSE,
    ];
    if (typeof position !== 'number') {
      throw new ResponseError('Position must be a Number');
    }
    if (!validatePosition.includes(position)) {
      throw new ResponseError(
        `Position must be one of the following values: ${validatePosition.join(', ')}`
      );
    }
    this.position = position;
  }
}
