import { ResponseError } from '../../../../error/ResponseError.js';

export default class CategoryId {
  constructor(categoryId) {
    if (categoryId === undefined || categoryId === null) {
      throw new ResponseError(400, 'CategoryId is required');
    }
    if (typeof categoryId !== 'number') {
      throw new ResponseError(400, 'CategoryId must be a number');
    }
    if (!Number.isInteger(categoryId)) {
      throw new ResponseError(400, 'CategoryId must be an integer');
    }
    if (categoryId <= 0) {
      throw new ResponseError(400, 'CategoryId must be greater than 0');
    }
    this.categoryId = categoryId;
  }
}
