import AdminAttachmentDTO from '../../DTO/admin/AdminAttachmentDTO.js';

export default class AdminAttachmentMapper {
  static attachmentDTO(attachment) {
    if (!attachment) return null;
    return AdminAttachmentDTO.attachmentToDTO(attachment);
  }

  static attachmentDTOList(attachments) {
    return attachments.map((attachment) => this.attachmentDTO(attachment));
  }

  static attachmentFilePathDTO(filePath) {
    return AdminAttachmentDTO.attachmentFilePathToDTO(filePath);
  }
}
