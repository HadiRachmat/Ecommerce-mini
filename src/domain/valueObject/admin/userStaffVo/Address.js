import { ResponseError } from '../../../../error/ResponseError.js';

export default class Address {
  constructor(address) {
    if (typeof address !== 'string') {
      throw new ResponseError('Address must be a string');
    }
    if (address.length < 10 || address.length > 100) {
      throw new ResponseError('Address must be between 10 and 100 characters');
    }
    this.address = address;
  }
}

