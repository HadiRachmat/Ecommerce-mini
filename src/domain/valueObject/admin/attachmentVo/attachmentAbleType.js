import { ResponseError } from '../../../../error/ResponseError.js';

export default class AttachmentAbleType {
  constructor(attachmentableType) {
    if (typeof attachmentableType !== 'string' || attachmentableType.trim() === '') {
      throw new ResponseError(400, 'AttachmentableType must be a non-empty string');
    }
    if (attachmentableType.length > 50) {
      throw new ResponseError(400, 'AttachmentableType must not exceed 100 characters');
    }
    this.attachmentableType = attachmentableType;
  }
}
