import UserAdminRepository from '../../../../infrastructure/repository/admin/userAdminRepository.js';
import AttachmentRepository from '../../../../infrastructure/repository/admin/attachmentRepository.js';
import UserAdminFactory from '../../../../domain/factory/admin/UserAdminFactory.js';
import AdminAttachmentFactory from '../../../../domain/factory/admin/AdminAttachmentFactory.js';
import UserAdminMappers from '../../../../infrastructure/mappers/admin/UserAdminMappers.js';
import AdminAttachmentMapper from '../../../../infrastructure/mappers/admin/AdminAttachment.js';
import { ResponseError } from '../../../../error/ResponseError.js';

const createUserAdmin = async (userId, request, file) => {
  const userAdmin = await UserAdminFactory.createUserAdmin({
    userId,
    ...request,
  });
  const newUserAdmin = await UserAdminRepository.createUserAdmin(userAdmin);
  if (newUserAdmin === null) {
    throw new ResponseError(500, 'Failed to create user admin');
  }
  if (newUserAdmin === 1) {
    throw new ResponseError(400, 'User admin already exists');
  }
  let newAttachment = null;
  if (file) {
    const attachmentFactory = await AdminAttachmentFactory.createAttachment({
      filename: file.originalname,
      filesize: file.size,
      filetype: file.mimetype,
      filepath: file.path,
      attachmentAbleId: newUserAdmin.getId(),
      attachmentAbletype: 'userAdmin',
    });
    newAttachment = await AttachmentRepository.createAttachment(attachmentFactory);
  } else {
    newAttachment = null;
  }
  const finalData = {
    message: 'User admin created successfully',
    userAdmin: UserAdminMappers.userAdminDTO(newUserAdmin),
    attachment: file
      ? AdminAttachmentMapper.attachmentFilePathDTO({
          filePath: newAttachment.getFilepath(),
        })
      : null,
  };

  return finalData;
};

export default {
  createUserAdmin,
};
