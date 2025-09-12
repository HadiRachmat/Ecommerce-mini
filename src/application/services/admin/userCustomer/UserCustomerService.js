import AdminUserRepository from '../../../../infrastructure/repository/admin/UserRepository.js';
import UserCustomerRepository from '../../../../infrastructure/repository/admin/UserCustomerRepository.js';
import UserCustomerFactory from '../../../../domain/factory/admin/UserCustomerFactory.js';
import AttachmentRepository from '../../../../infrastructure/repository/admin/attachmentRepository.js';
import AdminAttachmentFactory from '../../../../domain/factory/admin/AdminAttachmentFactory.js';

import UserCustomerMappers from '../../../../infrastructure/mappers/admin/UserCustomerMappers.js';
import AdminAttachmentMapper from '../../../../infrastructure/mappers/admin/AdminAttachment.js';
import { ResponseError } from '../../../../error/ResponseError.js';

const createUserCustomer = async (request, file) => {
  const findUser = await AdminUserRepository.findById(Number(request.userId));
  if (!findUser) {
    throw new ResponseError(400, 'user isn`t found');
  }

  const userCustomerRequest = await UserCustomerFactory.create({
    userId: findUser.getId(),
    ...request,
  });

  const existingUserCustomer = await UserCustomerRepository.findByUserId(
    userCustomerRequest.userId
  );
  if (existingUserCustomer) {
    throw new ResponseError(400, 'user customer already exists');
  }

  const newUserCustomer = await UserCustomerRepository.create(userCustomerRequest);
  if (!newUserCustomer) {
    throw new ResponseError(500, 'failed to create user customer');
  }
  let createAttachment = null;
  if (file) {
    const attachment = await AdminAttachmentFactory.createAttachment({
      filename: file.originalname,
      filepath: file.path,
      filetype: file.mimetype,
      filesize: file.size,
      attachmentAbleId: newUserCustomer.getId(),
      attachmentAbletype: 'User Customer',
    });
    createAttachment = await AttachmentRepository.createAttachment(attachment);
  } else {
    createAttachment = null;
  }
  const finalData = {
    message: 'success create user customer',
    userCustomer: UserCustomerMappers.userCustomerToDTO(newUserCustomer),
    attachment: file
      ? AdminAttachmentMapper.attachmentFilePathDTO({
          filePath: createAttachment.getFilepath(),
        })
      : null,
  };

  return finalData;
};

const getAllUserCustomer = async () => {
  const userCustomers = await UserCustomerRepository.findAllUserCustomers();
  if (!userCustomers) {
    return [];
  }
  return userCustomers.map((userCustomer) => UserCustomerMappers.userCustomerToDTO(userCustomer));
};

const getUserCustomerById = async (userCustomerId) => {
  const userCustomer = await UserCustomerRepository.findUserCustomerById(userCustomerId);
  if (!userCustomer) {
    throw new ResponseError(404, 'user customer not found');
  }
  const attachment = await AttachmentRepository.findAttachmentAble(
    userCustomer.getId(),
    'User Customer'
  );
  const finalData = {
    message: 'success get user customer by id',
    userCustomer: UserCustomerMappers.userCustomerToDTO(userCustomer),
    attachment: attachment
      ? AdminAttachmentMapper.attachmentFilePathDTO({ filePath: attachment.getFilepath() })
      : null,
  };
  return finalData;
};

const updateUserCustomer = async (id, request, file) => {
  const userCustomerId = await UserCustomerRepository.findUserCustomerById(id);
  if (!userCustomerId) {
    throw new ResponseError(404, 'user customer isn`t found');
  }
  console.log('fullname typeof:', typeof request.fullname, 'value:', request.fullname);
  const requestFactoryUpdate = await UserCustomerFactory.update({ ...request });
  const updateUserCustomer = await UserCustomerRepository.update(
    userCustomerId.getId(),
    requestFactoryUpdate
  );
  let attachment = null;
  if (file) {
    const findAttachment = await AttachmentRepository.findAttachmentAble(
      updateUserCustomer.getId(),
      'User Customer'
    );
    if (findAttachment) {
      await AttachmentRepository.deleteAttachment(findAttachment.getId());
    }
    const attachmentFactory = await AdminAttachmentFactory.createAttachment({
      filename: file.originalname,
      filepath: file.path,
      filetype: file.mimetype,
      filesize: file.size,
      attachmentAbleId: updateUserCustomer.getId(),
      attachmentAbletype: 'User Customer',
    });

    attachment = await AttachmentRepository.createAttachment(attachmentFactory);
  }

  const finalData = {
    message: 'Success update User Customer',
    userCustomer: UserCustomerMappers.userCustomerToDTO(updateUserCustomer),
    attachment: file
      ? AdminAttachmentMapper.attachmentFilePathDTO({
          filePath: attachment.getFilepath(),
        })
      : null,
  };
  return finalData;
};

const removeUserCustomer = async (id) => {
  const userCustomerId = await UserCustomerRepository.findUserCustomerById(id);
  if (!userCustomerId) {
    throw new ResponseError(404, 'user not found');
  }
  let attachmentData = null;
  const attachment = await AttachmentRepository.findAttachmentAble(
    userCustomerId.getId(),
    'User Customer'
  );
  if (attachment) {
    attachmentData = await AttachmentRepository.deleteAttachment(attachment.getId());
  }

  const deleteUserCustomer = await UserCustomerRepository.removeUserCustomer(
    userCustomerId.getId()
  );
  if (attachment === 1 && deleteUserCustomer === 1) {
    return {
      message: 'user customer deleted successfuly',
    };
  }
};
export default {
  createUserCustomer,
  getAllUserCustomer,
  getUserCustomerById,
  updateUserCustomer,
  removeUserCustomer
};
