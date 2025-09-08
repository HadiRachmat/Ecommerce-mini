export default class AttachmentEntity {
  constructor ({id, filename, filePath, filetype, filesize, attachmentableType, attachmentableId}) {
    this.id = id;
    this.filename = filename;
    this.filePath = filePath;
    this.filetype = filetype;
    this.filesize = filesize;
    this.attachmentableType = attachmentableType;
    this.attachmentableId = attachmentableId;
  }

  getId(){
    return this.id;
  }

  getFilename(){
    return this.filename;
  }

  getFilepath(){
    return this.filePath
  }

  getFiletype(){
    return this.filetype;
  }

  getFilesize() {
    return this.filesize;
  }

  getAttachmentableType(){
    return this.attachmentableType;
  }

  getAttachmentableId(){
    return this.attachmentableId
  }
}