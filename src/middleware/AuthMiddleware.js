import jwt from 'jsonwebtoken';
import { verifyAccessToken } from '../helpers/jwt_token_helper.js';
import AuthRepository from '../infrastructure/repository/public/auth/AuthRepository.js';
import * as CONSTANT from '../configuration/constant.js';

export const AuthMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).json({
        message: 'Authorization header missing',
      });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        message: 'Token missing',
      });
    }

    const decoded = verifyAccessToken(token);
    if (!decoded) {
      return res.status(401).json({
        message: 'Unauthorized: Invalid token',
      });
    }

    const findUserbyId = await AuthRepository.findById(decoded.id);
    if (!findUserbyId) {
      return res.status(401).json({
        message: 'Unauthorized: User not found',
      });
    }
    req.user = {
      id: findUserbyId.id,
      email: findUserbyId.getEmail(),
      username: findUserbyId.getUsername(),
      role: findUserbyId.getRole(),
      // userAdmin: findUserbyId.getUserAdmin(),
      // userStaff: findUserbyId.getUserStaff(),
      // userCustomer: findUserbyId.getUserCustomer(),
    };
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Unauthorized',
      error: error.message,
    });
  }
};

export const AuthorizeRole = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = Number(req.user?.role);
    if (userRole === CONSTANT.BASE_ROLE_ADMIN) {
      return next(); // Admin memiliki akses penuh
    }
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({
        message: 'Forbidden: You do not have access to this resource',
      });
    }
    next();
  };
};
