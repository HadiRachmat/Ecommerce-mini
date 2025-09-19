import { ResponseError } from '../../../../error/ResponseError.js';

export default class Price {
  constructor(price) {
    if (price === undefined || price === null) {
      throw new ResponseError(400, 'Price is required');
    }
    if (typeof price !== 'string') {
      throw new ResponseError(400, 'Price must be a string');
    }
    if (!/^\d+(\.\d+)?$/.test(price)) {
      throw new ResponseError('Price must be a valid numeric string');
    }
    this.price = price;
  }
}
