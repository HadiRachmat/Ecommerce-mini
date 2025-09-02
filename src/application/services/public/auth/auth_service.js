import AuthRepository from '../../../../infrastructure/repository/public/auth/AuthRepository.js';
import AuthFactory from '../../../../domain/factory/public/auth/AuthFactory.js';
import { ResponseError } from '../../../../error/ResponseError.js';
// import UserDTO from '../../../../infrastructure/DTO/userDTO.js';
import userMapper from '../../../../infrastructure/mappers/userMapper.js';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../../../../helpers/jwt_token_helper.js';

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
  const { email, password } = requestData;
  if (!email || !password) {
    throw new ResponseError(400, 'Email and password are required');
  }

  const user = await AuthRepository.findByEmail(email);
  if (!user) {
    throw new ResponseError(400, 'Invalid email or password');
  }
  const requestLoginFactory = await AuthFactory.loginUser({
    email,
    password,
    hashPassword: user.getPassword(),
  });

  if (!requestLoginFactory) {
    throw new ResponseError(400, 'Invalid password');
  }

  // Generate JWT tokens
  const payload = {
    id: user.id,
    email: user.getEmail(),
    role: Number(user.getRole()),
    // userAdmin: user.getUserAdmin(),
    // userStaff: user.getUserStaff(),
    // userCustomer: user.getUserCustomer(),
  };
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  const finalData = {
    message: 'User logged in successfully',
    user: userMapper.toDTO(user),
    token: {
      accessToken,
      refreshToken,
    },
  };

  return finalData;
};

const refreshToken = async ( request ) => {
  if(!request) {
    throw new ResponseError(400, 'Invalid request');
  }

  const payload = verifyRefreshToken(request);
  const user = await AuthRepository.findById(payload.id);
  if (!user) {
    throw new ResponseError(400, 'Invalid refresh token');
  }

  const payloadToken = {
    id: user.id,
    email: user.getEmail(),
    role: Number(user.getRole()),
  }
  const newAccessToken = generateAccessToken (payloadToken)

  const finalData = {
    message: 'Token refreshed successfully',
    accessToken: newAccessToken
  }

  return finalData;
}

export default {
  registerServices,
  loginServices,
  refreshToken
};
