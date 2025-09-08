import Email from '../../valueObject/admin/userVo/email.js';
import Password from '../../valueObject/admin/userVo/password.js';
import Role from '../../valueObject/admin/userVo/role.js';
import Status from '../../valueObject/admin/userVo/status.js';
import AdminUserEntity from '../../entities/admin/user/AdminUserEntity.js';
import Username from '../../valueObject/admin/userVo/username.js';
import HashPassword from '../../services/admin/user/HashPassword.js';

import { ResponseError } from '../../../error/ResponseError.js';

export default class AdminUserFactory {
  /**
   * ADMIN CREATE USER ( WITH PASSWORD )
   * @param {*} param0
   * @returns
   */
  static async createUser({ email, username, password, role, status }) {
    const emailVo = new Email(email.trim().toLowerCase());
    const usernameVo = new Username(username);
    const passwordVo = new Password(password);
    const roleVo = new Role(role);
    const statusVo = new Status(status);

    const hashPassword = await HashPassword.hash(passwordVo.password);
    if (!hashPassword) {
      throw new ResponseError(500, 'Failed to hash password');
    }

    const user = new AdminUserEntity({
      email: emailVo.email,
      username: usernameVo.username,
      password: hashPassword,
      role: roleVo.role,
      status: statusVo.status,
    });

    return user;
  }

  /**
   * UPDATE PASSWORD ONLY ( CHANGE PASSWORD )
   * @param {*} param0
   * @returns
   */
  static async updatePassword({ user, oldPassword, newPassword }) {
    const oldPasswordVo = new Password(oldPassword);
    const newPasswordVo = new Password(newPassword);

    const isMatch = await HashPassword.comparePassword(oldPasswordVo.password, user.password);
    if (!isMatch) {
      throw new ResponseError(400, 'Old password is incorrect');
    }

    const hashNewPassword = await HashPassword.hash(newPasswordVo.password);
    if (!hashNewPassword) {
      throw new ResponseError(500, 'Failed to hash new password');
    }

    const password = hashNewPassword;
    return password;
  }

  /**
   * UPDATE USER ( WITHOUT PASSWORD )
   * @param {*} param0
   * @returns
   */
  static async updateUser({ email, username, role, status }) {
    const emailVo = email ? new Email(email.trim().toLowerCase()) : null;
    const usernameVo = username ? new Username(username) : null;
    const roleVo = role ? new Role(role) : null;
    const statusVo = status !== undefined ? new Status(Number(status)) : null;

    const updateUser = new AdminUserEntity({
      email: emailVo ? emailVo.email : undefined,
      username: usernameVo ? usernameVo.username : undefined,
      role: roleVo ? roleVo.role : undefined,
      status: statusVo ? statusVo.status : undefined,
    });

    return updateUser;
  }
}
