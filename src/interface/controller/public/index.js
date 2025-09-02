import AuthService from '../../../application/services/public/auth/auth_service.js';
import { validate } from '../../../validation/validation.js';
import { register , login } from '../../../validation/public/auth_validation.js';

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
  const validated = validate(login, request);
  try {
    const result = await AuthService.loginServices(validated);
    res.cookie('refreshToken', result.token.refreshToken, {
      httpOnly: true,
      secure: false, // Set to true in production
      sameSite: 'Strict', // Adjust based on your requirements
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    res.status(200).json({
      status: 'success login user',
      data: result,
    });
  } catch (error) {
    console.error('Login error:', error);
    next(error);
  }
};

const refreshToken = async (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ message: 'Refresh token not provided' });
    }
      
    try {
      const payload = await AuthService.refreshToken(refreshToken);
      res.status(200).json({
        status: 'success',
        data: payload,
      });
    } catch (error) {
      console.error('Refresh token error:', error.message);
      next(error);
    }
}

export default {
  registerUser,
  loginUser,
  refreshToken
};
