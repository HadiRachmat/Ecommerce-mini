import { ResponseError } from "../../../../../error/ResponseError.js";
import * as CONSTANT from "../../../../../configuration/constant.js";

export default class Status {
  constructor(status) {
    const validStatuses = [CONSTANT.BASE_STATUS_ACTIVE, CONSTANT.BASE_STATUS_INACTIVE];
    if (typeof status !== "number" || !validStatuses.includes(status)) {
      throw new ResponseError(
        `Status must be one of the following values: ${validStatuses.join(", ")}`,
        400
      );
    }
    this.status = status;
  }
}