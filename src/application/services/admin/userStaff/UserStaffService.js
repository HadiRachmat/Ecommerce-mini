import UserStaffRepository from '../../../../infrastructure/repository/admin/UserStaffRepository.js';
import UserRepository from '../../../../infrastructure/repository/admin/UserRepository.js';
import AttachmentRepository from '../../../../infrastructure/repository/admin/attachmentRepository.js';
import AdminAttachmentFactory from '../../../../domain/factory/admin/AdminAttachmentFactory.js';
import UserStaffFactory from '../../../../domain/factory/admin/UserStaffFactory.js';
import UserStaffMappers from '../../../../infrastructure/mappers/admin/UserStaffMappers.js';
import { ResponseError } from '../../../../error/ResponseError.js';
import AdminAttachmentMapper from '../../../../infrastructure/mappers/admin/AdminAttachmentMapper.js';

const createUserStaff = async (request, file) => {
  const findUser = await UserRepository.findById(request.userId);
  if (!findUser) {
    throw new ResponseError(400, 'user isn`t found');
  }

  const userStaffRequest = await UserStaffFactory.create({
    userId: findUser.getId(),
    ...request,
  });

  const existingUserStaff = await UserStaffRepository.findByUserId(userStaffRequest.userId);
  if (existingUserStaff) {
    throw new ResponseError(400, 'user staff already exists');
  }

  const createUserStaff = await UserStaffRepository.create(userStaffRequest);
  if (!createUserStaff) {
    throw new ResponseError(500, 'failed to create user staff');
  }
  let createAttachment = null;
  if (file) {
    const attachmentRequest = await AdminAttachmentFactory.createAttachment({
      userId: findUser.getId(),
      filename: file.originalname,
      filePath: file.path,
      filetype: file.mimetype,
      filesize: file.size,
      attachmentableId: createUserStaff.getId(),
      attachmentableType: 'User Staff',
    });
    createAttachment = await AttachmentRepository.createAttachment(attachmentRequest);
  } else {
    createAttachment = null;
  }

  const finalData = {
    userStaff: UserStaffMappers.userStaffToDto(createUserStaff),
    attachment: file
      ? AdminAttachmentMapper.attachmentFilePathDTO({
          filePath: createAttachment.getFilepath(),
        })
      : null,
  };

  return finalData;
};

const findAllUserStaff = async () => {
  const findUserStaff = await UserStaffRepository.findAllUserStaff();
  if (!findUserStaff) {
    throw new ResponseError(400, 'user isn`t found');
  }

  const finalData = {
    message: ' find All User Staff successfully',
    userStaff: findUserStaff,
  };

  return finalData;
};

const findUserStaffById = async (id) => {
  const userStaffData = await UserStaffRepository.findUserStaffById(id);
  if (!userStaffData) {
    throw new ResponseError(400, 'user Staff isn`t found');
  }

  const attachment = await AttachmentRepository.findAttachmentAble(
    userStaffData.getId(),
    'User Staff'
  );
  if (!attachment) {
    return null;
  }

  const finalData = {
    userStaff: UserStaffMappers.userStaffToDto(userStaffData),
    attachment: attachment
      ? AdminAttachmentMapper.attachmentFilePathDTO({
          filePath: attachment.getFilepath(),
        })
      : null,
  };

  return finalData;
};

const updateUserStaff = async (id, request, file) => {
  const findUserStaff = await UserStaffRepository.findUserStaffById(id);
  if (!findUserStaff) {
    throw new ResponseError(400, 'user staff isn`t found');
  }

  const userStaffRequest = await UserStaffFactory.update({
    ...request,
  });
  const updateUserStaff = await UserStaffRepository.update(findUserStaff.getId(), userStaffRequest);
  if (!updateUserStaff) {
    throw new ResponseError(500, 'failed to update user staff');
  }

  let updateAttachment = null;
  if (file) {
    const findAttachmentAble = await AttachmentRepository.findAttachmentAble(
      findUserStaff.getId(),
      'User Staff'
    );
    if (findAttachmentAble) {
      await AttachmentRepository.deleteAttachment(findAttachmentAble.getId());
    }
    const attachmentRequest = await AdminAttachmentFactory.createAttachment({
      filename: file.originalname,
      filePath: file.path,
      filetype: file.mimetype,
      filesize: file.size,
      attachmentableId: findUserStaff.getId(),
      attachmentableType: 'User Staff',
    });
    updateAttachment = await AttachmentRepository.createAttachment(attachmentRequest);
  }

  const finalData = {
    message: 'user staff updated successfully',
    userStaff: UserStaffMappers.userStaffToDto(updateUserStaff),
    attachment: file
      ? AdminAttachmentMapper.attachmentFilePathDTO({
          filePath: updateAttachment.getFilepath(),
        })
      : null,
  };

  return finalData;
};

const removeUserStaff = async (id) => {
  const findUserStaff = await UserStaffRepository.findUserStaffById(id);
  if (!findUserStaff) {
    throw new ResponseError(400, 'user staff isn`t found');
  }

  const removeAttachment = await AttachmentRepository.findAttachmentAble(
    findUserStaff.getId(),
    'User Staff'
  );
  if (removeAttachment) {
    await AttachmentRepository.deleteAttachment(removeAttachment.getId());
  }

  await UserStaffRepository.removeUserStaff(findUserStaff.getId());

  return { message: 'user staff deleted successfully' };
};
export default {
  createUserStaff,
  findAllUserStaff,
  findUserStaffById,
  updateUserStaff,
  removeUserStaff
};
