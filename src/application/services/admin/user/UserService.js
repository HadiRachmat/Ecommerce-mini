import AdminUserRepository from '../../../../infrastructure/repository/admin/UserRepository.js';
import AdminUserFactory from '../../../../domain/factory/admin/AdminUserFactory.js';
import AdminAttachmentFactory from '../../../../domain/factory/admin/AdminAttachmentFactory.js';
import { ResponseError } from '../../../../error/ResponseError.js';
import AdminUserMapper from '../../../../infrastructure/mappers/admin/AdminUserMapper.js';
import AttachmentRepository from '../../../../infrastructure/repository/admin/attachmentRepository.js';
import AdminAttachmentMapper from '../../../../infrastructure/mappers/admin/AdminAttachment.js';

/**
 * CREATE ADMIN USER SERVICE
 * @param {*} requestData
 * @returns
 */
const createAdminUserService = async (file, requestData) => {
  const { confirmPassword, ...request } = requestData;

  const requestFactory = await AdminUserFactory.createUser(request);

  const existingUser = await AdminUserRepository.findByEmail(request.email);
  if (existingUser && existingUser.getEmail() === request.email) {
    throw new ResponseError(400, 'Email already in use');
  }

  const existingUsername = await AdminUserRepository.findByUsername(request.username);
  if (existingUsername && existingUsername.getUsername() === request.username) {
    throw new ResponseError(400, 'Username already in use');
  }

  const newUser = await AdminUserRepository.createUser(requestFactory);
  if (!newUser) {
    throw new ResponseError(500, 'Failed to create user');
  }
  let newAttachment = null;
  if (file) {
    // If there's a file, handle the attachment creation
    const requestAttachmentFactory = await AdminAttachmentFactory.createAttachment({
      filename: file.originalname,
      filesize: file.size,
      filetype: file.mimetype,
      filepath: file.path,
      attachmentAbleId: newUser.id,
      attachmentAbletype: 'user',
    });
    newAttachment = await AttachmentRepository.createAttachment(requestAttachmentFactory);
  } else {
    newAttachment = null;
  }
  const finalData = {
    message: 'Admin user created successfully',
    user: AdminUserMapper.userDTO(newUser),
    attachment: file
      ? AdminAttachmentMapper.attachmentFilePathDTO({
          filePath: newAttachment.getFilepath(),
        })
      : null,
  };

  return finalData;
};

const adminChangeUserPassword = async (user, oldPassword, newPassword) => {
  const findUser = await AdminUserRepository.findById(user);
  if (!findUser) {
    throw new ResponseError(404, 'User not found');
  }

  const updatedUser = await AdminUserFactory.updatePassword({
    user: findUser,
    oldPassword,
    newPassword,
  });
  if (!updatedUser) {
    throw new ResponseError(500, 'Failed to update password');
  }

  const changeUserPassword = await AdminUserRepository.updatePassword(findUser.id, updatedUser);

  const finalData = {
    message: 'Password updated successfully',
    user: AdminUserMapper.userDTO(changeUserPassword),
  };

  return finalData;
};

const AdminFindAllUsers = async () => {
  const users = await AdminUserRepository.findAllUsers();
  if (!users) {
    throw new ResponseError(404, 'No users found');
  }

  const finalData = {
    message: 'Users retrieved successfully',
    users: AdminUserMapper.userDTOList(users),
  };
  return finalData;
};

const AdminFindUserById = async (id) => {
  const user = await AdminUserRepository.findById(id);
  if (!user) {
    throw new ResponseError(404, 'User not found');
  }
  const attachment = await AttachmentRepository.findAttachmentAble(user.getId(), 'user');

  const finalData = {
    message: 'User retrieved successfully',
    user: AdminUserMapper.userDTO(user),
    attachment: AdminAttachmentMapper.attachmentFilePathDTO({
      filePath: attachment ? attachment.getFilepath() : null,
    }),
  };
  return finalData;
};

const AdminUpdateUser = async (id, requestData, file) => {
  const user = await AdminUserRepository.findById(id);
  if (!user) {
    throw new ResponseError(404, 'User not found');
  }
  const requestUpdateFactory = await AdminUserFactory.updateUser({
    email: requestData.email,
    username: requestData.username,
    role: Number(requestData.role),
    status: Number(requestData.status),
  });
  const updateUser = await AdminUserRepository.updateUser(id, requestUpdateFactory);
  if (!updateUser) {
    throw new ResponseError(500, 'Failed to update user');
  }
  let newAttachment = null;
  if (file) {
    const currentAttachment = await AttachmentRepository.findAttachmentAble(user.getId(), 'user');
    if (currentAttachment) {
      await AttachmentRepository.deleteAttachment(currentAttachment.getId());
    }
    const requestAttachmentFactory = await AdminAttachmentFactory.createAttachment({
      filename: file.originalname,
      filesize: file.size,
      filetype: file.mimetype,
      filepath: file.path,
      attachmentAbleId: updateUser.getId(),
      attachmentAbletype: 'user',
    });
    newAttachment = await AttachmentRepository.createAttachment(requestAttachmentFactory);
  }

  const finalData = {
    message: 'User updated successfully',
    user: AdminUserMapper.userDTO(updateUser),
    attachment: file ? AdminAttachmentMapper.attachmentDTO(newAttachment) : null,
  };
  return finalData;
};

const AdminDeleteUser = async (id) => {
  const user = await AdminUserRepository.findById(id);
  if (!user) {
    throw new ResponseError(404, 'User not found');
  }

  const currentAttachment = await AttachmentRepository.findAttachmentAble(user.getId(), 'user');
  if (currentAttachment) {
    await AttachmentRepository.deleteAttachment(currentAttachment.getId());
  }

  const deleteUser = await AdminUserRepository.deleteUser(id);
  if (!deleteUser) {
    throw new ResponseError(500, 'Failed to delete user');
  }
  const finalData = {
    message: 'User deleted successfully',
  };
  return finalData;
};

export default {
  createAdminUserService,
  adminChangeUserPassword,
  AdminFindAllUsers,
  AdminFindUserById,
  AdminUpdateUser,
  AdminDeleteUser,
};
