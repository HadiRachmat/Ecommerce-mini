import AuthService from '../../../application/services/public/auth/auth_service.js';
import { validate } from '../../../validation/validation.js';
import { register } from '../../../validation/public/auth_validation.js';

const registerUser = async (req, res, next) => {
  const request = req.body;
  try {
    const validatedRequest = validate(register, request);
    const result = await AuthService.registerServices(validatedRequest);
    res.status(201).json({
      status: 'success register user',
      data: result,
    });
  } catch (error) {
    console.error('Register error:', error);
    next(error);
  }
};
const loginUser = async (req, res, next) => {
  const request = req.body;
  try {
    const result = await AuthService.loginServices(request);
    res.status(200).json({
      status: 'success login user',
      data: result,
    });
  } catch (error) {
    console.error('Login error:', error);
    next(error);
  }
};
export default {
  registerUser,
  loginUser,
};
