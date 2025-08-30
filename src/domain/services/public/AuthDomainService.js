import bcrypt from 'bcrypt';
import PasswordHash from '../../../infrastructure/security/passwordHash.js';

export default class AuthDomainService {
  static async hashPassword(password) {
    if (typeof password !== 'string' || password.length === 0) {
      throw new Error('Password must be a non-empty string');
    }
    return await PasswordHash.hashPassword(password);
  }

  static async comparePassword(user, password) {
    if (!user || typeof user.passwordHash !== 'string') {
      throw new Error('Invalid user object');
    }
    if (typeof password !== 'string' || password.length === 0) {
      throw new Error('Password must be a non-empty string');
    }
    return await PasswordHash.comparePassword(password, user.passwordHash);
  }
}