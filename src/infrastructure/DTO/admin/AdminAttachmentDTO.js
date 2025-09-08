export default class AdminAttachmentDTO {
  constructor({
    id,
    filename,
    filePath,
    filetype,
    filesize,
    attachmentableType,
    attachmentableId,
  } = {}) {
    this.id = id;
    this.filename = filename;
    this.filePath = filePath;
    this.filetype = filetype;
    this.filesize = filesize;
    this.attachmentableType = attachmentableType;
    this.attachmentableId = attachmentableId;
  }
  static attachmentToDTO(attachment) {
    if (!attachment) return null;
    return new AdminAttachmentDTO({
      id: attachment.getId(),
      filename: attachment.getFilename(),
      filePath: attachment.getFilepath(),
      filetype: attachment.getFiletype(),
      filesize: attachment.getFilesize(),
      attachmentableId: attachment.getAttachmentableId(),
      attachmentableType: attachment.getAttachmentableType(),
    });
  }

}