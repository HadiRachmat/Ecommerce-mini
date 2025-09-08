import Prisma from '../../prisma/prismaClient.js';
import AttachmentEntity from '../../../domain/entities/admin/attachment/attachmentEntity.js';

export default class AttachmentRepository {
  static async createAttachment(attachment) {
    const newAttachment = await Prisma.attachment.create({
      data: attachment,
      select: {
        id: true,
        filename: true,
        filePath: true,
        filetype: true,
        filesize: true,
        attachmentableType: true,
        attachmentableId: true,
      },
    });
    return newAttachment ? new AttachmentEntity(newAttachment) : null;
  }

  static async findAttachmentAble(attachmentAbleId, attachmentAbleType) {
    const attachment = await Prisma.attachment.findFirst({
      where: {
        attachmentableId: attachmentAbleId,
        attachmentableType: attachmentAbleType,
      },
      select: {
        id: true,
        filename: true,
        filePath: true,
        filetype: true,
        filesize: true,
        attachmentableType: true,
        attachmentableId: true,
      },
    });
    return attachment ? new AttachmentEntity(attachment) : null;
  }

  static async deleteAttachment(id) {
    const deletedAttachment = await Prisma.attachment.delete({
      where: { id },
      select: {
        id: true,
        filename: true,
        filePath: true,
        filetype: true,
        filesize: true,
        attachmentableType: true,
        attachmentableId: true,
      },
    });
    return deletedAttachment ? new AttachmentEntity(deletedAttachment) : null;
  }

  static async updateAttachment(id, attachment) {
    const updatedAttachment = await Prisma.attachment.update({
      where: { id },
      data: attachment,
      select: {
        id: true,
        filename: true,
        filePath: true,
        filetype: true,
        filesize: true,
        attachmentableType: true,
        attachmentableId: true,
      },
    });
    return updatedAttachment ? new AttachmentEntity(updatedAttachment) : null;
  }
}
