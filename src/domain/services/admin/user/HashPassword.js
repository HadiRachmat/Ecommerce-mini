import PasswordHash from '../../../../infrastructure/security/passwordHash.js';
import { ResponseError } from '../../../../error/ResponseError.js';

export default class HashPassword {
  static async hash(password) {
    if (typeof password !== 'string' || password.length === 0) {
      throw new ResponseError(400, 'Password must be a non-empty string');
    }
    return await PasswordHash.hashPassword(password);
  }

  static async comparePassword(plainPassword, hashedPassword) {
    if (typeof plainPassword !== 'string' || plainPassword.length === 0) {
      throw new ResponseError(400, 'Plain password must be a non-empty string');
    }
    if (typeof hashedPassword !== 'string' || hashedPassword.length === 0) {
      throw new ResponseError(400, 'Hashed password must be a non-empty string');
    }
    return await PasswordHash.comparePassword(plainPassword, hashedPassword);
  }
}
