import AuthRepository from '../../../../infrastructure/repository/public/auth/AuthRepository.js';
import AuthFactory from '../../../../domain/factory/public/auth/AuthFactory.js';
import { ResponseError } from '../../../../error/ResponseError.js';
// import UserDTO from '../../../../infrastructure/DTO/userDTO.js';
import userMapper from '../../../../infrastructure/mappers/userMapper.js';

const registerServices = async (requestData) => {
  const { confirmPassword, ...requestDTO } = requestData;

  const requestRegisterFactory = await AuthFactory.registerUser(requestDTO);

  const existingUser = await AuthRepository.findByEmail(requestDTO.email);
  if (existingUser && existingUser.getEmail() === requestDTO.email) {
    throw new ResponseError(400, 'Email already in use');
  }

  const registerUser = await AuthRepository.registerUser(requestRegisterFactory);

  const finalData = {
    message: 'User registered successfully',
    user: userMapper.toDTO(registerUser),
  };

  return finalData;
};

const loginServices = async (requestData) => {
  const requestLoginFactory = await AuthFactory.loginUser(requestData);
  if (!requestLoginFactory) {
    throw new ResponseError(400, 'Invalid email or password');
  }
  const loginUser = await AuthRepository.findByEmail(requestData.email);
  if (!loginUser) {
    throw new ResponseError(400, 'Invalid email or password');
  }

  const finalData = {
    message: 'User logged in successfully',
    user: userMapper.toDTO(loginUser),
  };

  return finalData;
};

export default {
  registerServices,
  loginServices,
};
