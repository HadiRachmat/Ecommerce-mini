import { ResponseError } from "../../../../error/ResponseError.js";

export default class Filesize {
  constructor(filesize) {
    if (typeof filesize !== 'number' || filesize < 0) {
      throw new ResponseError(400, 'Filesize must be a non-negative number');
    }
    if (filesize > 10 * 1024 * 1024) { // 10 MB limit
      throw new ResponseError(400, 'Filesize must not exceed 10 MB');
    }
    this.filesize = filesize;
  }
}