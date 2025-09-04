import * as CONSTANT from '../../../../configuration/constant.js';
import { ResponseError } from '../../../../error/ResponseError.js';

export default class Role {
  constructor(role) {
    const validRoles = [ CONSTANT.BASE_ROLE_ADMIN, CONSTANT.BASE_ROLE_STAFF, CONSTANT.BASE_ROLE_CUSTOMER]
    if (typeof role !== 'number' || !validRoles.includes(role)) {
      throw new ResponseError(
        `Role must be one of the following values: ${validRoles.join(', ')}`,
        400
      );
    }
    this.role = role;
  
  }
}
