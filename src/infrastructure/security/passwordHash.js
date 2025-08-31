import bcrypt from 'bcrypt';

export default class PasswordHash {
  static async hashPassword(password) {
    return await bcrypt.hash(password, 10);
  }

  static async comparePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
}