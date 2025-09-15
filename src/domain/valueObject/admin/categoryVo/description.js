import { ResponseError } from "../../../../error/ResponseError.js";

export default class Description {
  constructor(description) {
    if ( description && description.length > 255) {
      throw new ResponseError(400, "Description must not exceed 255 characters");
    }
    this.description = description;
  }
}