import AdminUserRepository from "../../../../infrastructure/repository/admin/UserRepository.js";
import AdminUserFactory from "../../../../domain/factory/admin/AdminUserFactory.js";
import { ResponseError } from "../../../../error/ResponseError.js";
import AdminUserMapper from "../../../../infrastructure/mappers/admin/AdminUserMapper.js";

const createAdminUserService = async (requestData) => {
  const {confirmPassword, ...request} = requestData;

  const requestFactory = await AdminUserFactory.createUser(request)

  const existingUser = await AdminUserRepository.findByEmail(request.email);
  if (existingUser && existingUser.getEmail() === request.email) {
    throw new ResponseError(400, 'Email already in use');
  }
  
  const existingUsername = await AdminUserRepository.findByUsername(request.username);
  if (existingUsername && existingUsername.getUsername() === request.username) {
    throw new ResponseError(400, 'Username already in use');
  }

  const newUser = await AdminUserRepository.createAdminUser(requestFactory);

  const finalData = {
    message: 'Admin user created successfully',
    user: AdminUserMapper.userDTO(newUser),
  };
  
  return finalData;
}

export default {
  createAdminUserService
}