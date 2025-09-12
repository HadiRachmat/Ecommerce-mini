import { ResponseError } from '../../../../error/ResponseError.js';

export default class Address {
  constructor(address) {
    if (typeof address !== 'string') {
      throw new ResponseError(400, 'address must be a string');
    }
    if (address.length < 10 || address.length > 100) {
      throw new ResponseError(400, 'address length must be between 10 and 100 characters');
    }
    this.address = address;
  }
}
