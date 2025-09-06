import Email from '../../../valueObject/public/auth/registerVO/email.js';
import Password from '../../../valueObject/public/auth/registerVO/password.js';
import Role from '../../../valueObject/public/auth/registerVO/role.js';
import Status from '../../../valueObject/public/auth/registerVO/status.js';
import Auth from '../../../entities/public/auth/Auth.js';
import Username from '../../../valueObject/public/auth/registerVO/username.js';
import AuthDomainService from '../../../services/public/AuthDomainService.js';
import { ResponseError } from '../../../../error/ResponseError.js';

export default class AuthFactory {
  static async registerUser({ email, username, password, role, status }) {
    const emailVo = new Email(email.trim().toLowerCase());
    const usernameVo = new Username(username);
    const passwordVo = new Password(password);
    const roleVo = new Role(role);
    const statusVo = new Status(status);

    const hashPassword = await AuthDomainService.hashPassword(passwordVo.password);

    const register = new Auth({
      email: emailVo.email,
      username: usernameVo.username,
      password: hashPassword,
      role: roleVo.role,
      status: statusVo.status,
    })

    return register;
  }

  static async loginUser({ email, password, hashPassword}) {
    const emailVo = new Email(email);
    const passwordVo = new Password(password);

    const isMatch = await AuthDomainService.comparePassword(passwordVo.password, hashPassword);
    if (!isMatch) {
      throw new ResponseError(400, 'Invalid password request');
    }
    
    const login = new Auth({
      email: emailVo.email,
      password: hashPassword,
    });

    return login;
  }
}
