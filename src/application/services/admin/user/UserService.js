import AdminUserRepository from '../../../../infrastructure/repository/admin/UserRepository.js';
import AdminUserFactory from '../../../../domain/factory/admin/AdminUserFactory.js';
import { ResponseError } from '../../../../error/ResponseError.js';
import AdminUserMapper from '../../../../infrastructure/mappers/admin/AdminUserMapper.js';

const createAdminUserService = async (requestData) => {
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

  const finalData = {
    message: 'Admin user created successfully',
    user: AdminUserMapper.userDTO(newUser),
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

  const finalData = {
    message: 'User retrieved successfully',
    user: AdminUserMapper.userDTO(user),
  };
  return finalData;
};

const AdminUpdateUser = async (id, requestData) => {
  const user = await AdminUserRepository.findById(id);
  if (!user) {
    throw new ResponseError(404, 'User not found');
  }
  const requestUpdateFactory = await AdminUserFactory.updateUser(requestData);
  const updateUser = await AdminUserRepository.updateUser(id, requestUpdateFactory);
  if (!updateUser) {
    throw new ResponseError(500, 'Failed to update user');
  }

  const finalData = {
    message: 'User updated successfully',
    user: AdminUserMapper.userDTO(updateUser),
  };
  return finalData;
};

export default {
  createAdminUserService,
  adminChangeUserPassword,
  AdminFindAllUsers,
  AdminFindUserById,
  AdminUpdateUser,
};
