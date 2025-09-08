import Filename from "../../valueObject/admin/attachmentVo/filename.js";
import Filetype from "../../valueObject/admin/attachmentVo/filetype.js";
import AttachmentAbleId from "../../valueObject/admin/attachmentVo/attachmentAbleId.js";
import AttachmentAbleType from "../../valueObject/admin/attachmentVo/attachmentAbleType.js";
import AttachmentEntity from "../../entities/admin/attachment/attachmentEntity.js";

export default class AdminAttachmentFactory {
  static async createAttachment ({filename, filesize, filetype, filepath, attachmentAbleId, attachmentAbletype}) {
    const filenameVo = new Filename(filename);
    const filetypeVo = new Filetype(filetype);
    const attachmentAbleIdVo = new AttachmentAbleId(attachmentAbleId);
    const attachmentAbleTypeVo = new AttachmentAbleType(attachmentAbletype);

    const attachment = new AttachmentEntity({
      filename: filenameVo.filename,
      filesize,
      filetype: filetypeVo.filetype,
      filePath: filepath,
      attachmentableId: attachmentAbleIdVo.attachmentableId,
      attachmentableType: attachmentAbleTypeVo.attachmentableType,
    });

    return attachment;
  }

  static async updateAttachment ({id, filename, filesize, filetype, filepath, attachmnetAbleId, attachmentAbletype}){
    const filenameVo = new Filename(filename);
    const filetypeVo = new Filetype(filetype);
    const attachmentAbleIdVo = new AttachmentAbleId(attachmnetAbleId);
    const attachmentAbleTypeVo = new AttachmentAbleType(attachmentAbletype);

    const attachment = new AttachmentEntity({
      id,
      filename: filenameVo.filename,
      filesize,
      filetype: filetypeVo.filetype,
      filePath: filepath,
      attachmentableId: attachmentAbleIdVo.attachmentableId,
      attachmentableType: attachmentAbleTypeVo.attachmentableType,
    });
    
    return attachment;
  }
}