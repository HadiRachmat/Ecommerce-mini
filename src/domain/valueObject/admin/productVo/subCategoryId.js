import { ResponseError } from '../../../../error/ResponseError.js';

export default class subCategoryId {
  constructor(subCategoryId) {
    if (
      subCategoryId !== null &&
      (typeof subCategoryId !== 'number' || !Number.isInteger(subCategoryId) || subCategoryId <= 0)
    ) {
      throw new ResponseError(400, 'SubCategory id must be a positive integer or null', 400);
    }
    this.subCategoryid = subCategoryId;
  }
}
