import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_ACCESS_TOKEN = process.env.ACCESS_TOKEN_SECRET;
const JWT_REFRESH_TOKEN = process.env.REFRESH_TOKEN_SECRET;
const JWT_ACCESS_EXPIRATION = '5m';
const JWT_REFRESH_EXPIRATION = '7d';

if (!JWT_ACCESS_TOKEN || !JWT_REFRESH_TOKEN) {
  throw new Error('JWT secrets are not defined in environment variables');
}

export const generateAccessToken = (payload) => {
  return jwt.sign(payload, JWT_ACCESS_TOKEN, { expiresIn: JWT_ACCESS_EXPIRATION });
};

export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, JWT_REFRESH_TOKEN, { expiresIn: JWT_REFRESH_EXPIRATION });
};

export const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, JWT_ACCESS_TOKEN);
  } catch (error) {
    return null;
  }
}

export const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, JWT_REFRESH_TOKEN);
  } catch (error) {
    return null;
  }
}