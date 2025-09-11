import UserStaffRepository from '../../../../infrastructure/repository/admin/UserStaffRepository.js';
import UserRepository from '../../../../infrastructure/repository/admin/UserRepository.js';
import AttachmentRepository from '../../../../infrastructure/repository/admin/attachmentRepository.js';
import AdminAttachmentFactory from '../../../../domain/factory/admin/AdminAttachmentFactory.js';
import UserStaffFactory from '../../../../domain/factory/admin/UserStaffFactory.js';
import UserStaffMappers from '../../../../infrastructure/mappers/admin/UserStaffMappers.js';
import { ResponseError } from '../../../../error/ResponseError.js';
import AdminAttachmentMapper from '../../../../infrastructure/mappers/admin/AdminAttachment.js';

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
      filepath: file.path,
      filetype: file.mimetype,
      filesize: file.size,
      attachmentAbleId: createUserStaff.getId(),
      attachmentAbletype: 'User Staff',
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
export default {
  createUserStaff,
  findAllUserStaff,
  findUserStaffById,
};
