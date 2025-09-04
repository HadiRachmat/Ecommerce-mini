import { ResponseError } from "../../../../error/ResponseError.js";

export default class Username {
  constructor(username) {
    if (typeof username !== "string" || username.length < 3 || username.length > 30) {
      throw new ResponseError(
        "Username must be a string between 3 and 30 characters",
        400
      );
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
      throw new ResponseError(
        "Username can only contain letters, numbers, and underscores",
        400
      );
    }
    this.username = username;
  }
}