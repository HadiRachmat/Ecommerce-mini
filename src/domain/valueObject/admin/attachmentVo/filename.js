import { ResponseError } from "../../../../error/ResponseError.js";

export default class Filename {
  constructor(filename) {
    const regex = /^[a-zA-Z0-9._-]+$/;
    if (!regex.test(filename)) {
      throw new ResponseError(
        400, 'Filename can only contain letters, numbers, dots, underscores, and hyphens'
      );
    }
    if (typeof filename !== 'string' || filename.trim() === '') {
      throw new ResponseError(400, 'Filename must be a non-empty string');
    }

    

    this.filename = filename;
  }
}