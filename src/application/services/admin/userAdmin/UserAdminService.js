import UserAdminRepository from '../../../../infrastructure/repository/admin/userAdminRepository.js';
import AttachmentRepository from '../../../../infrastructure/repository/admin/attachmentRepository.js';
import UserAdminFactory from '../../../../domain/factory/admin/UserAdminFactory.js';
import AdminAttachmentFactory from '../../../../domain/factory/admin/AdminAttachmentFactory.js';
import UserAdminMappers from '../../../../infrastructure/mappers/admin/UserAdminMappers.js';
import AdminAttachmentMapper from '../../../../infrastructure/mappers/admin/AdminAttachmentMapper.js';
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
      attachmentAbletype: 'User Admin',
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

const getUserAdminById = async (id) => {
  const userAdmin = await UserAdminRepository.findById(id);
  if (!userAdmin) {
    throw new ResponseError(404, 'User Admin isn`t found');
  }

  const attachment = await AttachmentRepository.findAttachmentAble(userAdmin.getId(), 'userAdmin');
  const finalData = {
    userAdmin: UserAdminMappers.userAdminDTO(userAdmin),
    attachment: attachment
      ? AdminAttachmentMapper.attachmentFilePathDTO({
          filePath: attachment.getFilepath(),
        })
      : null,
  };
  return finalData;
};

const updateUserAdmin = async (id, request, file) => {
  const findUser = await UserAdminRepository.findById(id);
  if (!findUser) {
    throw new ResponseError(404, 'User not found');
  }

  const requestFactory = await UserAdminFactory.updateUserAdmin({
    ...request,
  });

  const updateUserAdmin = await UserAdminRepository.updateUserAdmin(
    findUser.getId(),
    requestFactory
  );
  if (!updateUserAdmin) {
    throw new ResponseError(500, 'Failed to update user admin');
  }

  let attachment = null;
  if (file) {
    const existingAttachment = await AttachmentRepository.findAttachmentAble(
      findUser.getId(),
      'User Admin'
    );
    if (existingAttachment) {
      await AttachmentRepository.deleteAttachment(existingAttachment.getId());
    }
    const attachmentFactory = await AdminAttachmentFactory.createAttachment({
      filename: file.originalname,
      filesize: file.size,
      filetype: file.mimetype,
      filepath: file.path,
      attachmentAbleId: findUser.getId(),
      attachmentAbletype: 'User Admin',
    });
    attachment = await AttachmentRepository.createAttachment(attachmentFactory);
  }

  const finalData = {
    message: 'User admin updated successfully',
    userAdmin: UserAdminMappers.userAdminDTO(updateUserAdmin),
    attachment: file
      ? AdminAttachmentMapper.attachmentFilePathDTO({
          filePath: attachment.getFilepath(),
        })
      : null,
  };

  return finalData;
};

const deleteUserAdmin = async (id) => {
  const findUser = await UserAdminRepository.findById(id);
  if (!findUser) {
    throw new ResponseError(404, 'User not found');
  }

  const existingAttachment = await AttachmentRepository.findAttachmentAble(
    findUser.getId(),
    'User Admin'
  );
  if (existingAttachment) {
    await AttachmentRepository.deleteAttachment(existingAttachment.getId());
  }

  const deleteUserAdmin = await UserAdminRepository.deleteUserAdmin(findUser.getId());
  if (!deleteUserAdmin) {
    throw new ResponseError(500, 'Failed to delete user admin');
  }

  const finalData = {
    message: 'User admin deleted successfully',
    userAdmin: UserAdminMappers.userAdminDTO(deleteUserAdmin),
  };

  return finalData;
};
export default {
  createUserAdmin,
  getUserAdminById,
  updateUserAdmin,
  deleteUserAdmin,
};
