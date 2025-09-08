import { ResponseError } from "../../../../error/ResponseError.js";

export default class AttachmentAbleId {
  constructor(attachmentableId) {
    if (typeof attachmentableId !== 'number' || attachmentableId <= 0) {
      throw new ResponseError('AttachmentableId must be a positive number');
    }
    this.attachmentableId = attachmentableId;
  }
}
