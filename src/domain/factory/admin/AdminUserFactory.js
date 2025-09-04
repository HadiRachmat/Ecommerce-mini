import Email from '../../valueObject/admin/userVo/email.js';
import Password from '../../valueObject/admin/userVo/password.js';
import Role from '../../valueObject/admin/userVo/role.js';
import Status from '../../valueObject/admin/userVo/status.js';
import AdminUserEntity from '../../entities/admin/user/AdminUserEntity.js';
import Username from '../../valueObject/admin/userVo/username.js';
import HashPassword from '../../services/admin/user/HashPassword.js';

import { ResponseError } from '../../../error/ResponseError.js';

export default class AdminUserFactory {
  static async createUser ({ email, username, password, role, status }) {
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
    })

    return user;
  }
}