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

export default {
  createUserCustomer,
  getAllUserCustomer,
  getUserCustomerById,
};
