import * as CONSTANT from '../../../../configuration/constant.js';
export default class Auth {
  constructor({ id, email, username, password, role, status, userAdmin, userStaff, userCustomer }) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.password = password;
    this.role = role;
    this.status = status;
    this.userAdmin = userAdmin;
    this.userStaff = userStaff;
    this.userCustomer = userCustomer;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getUsername() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }

  getRoleAdmin() {
    return this.role === CONSTANT.BASE_ROLE_ADMIN;
  }

  getRoleStaff() {
    return this.role === CONSTANT.BASE_ROLE_STAFF;
  }

  getRoleCustomer() {
    return this.role === CONSTANT.BASE_ROLE_CUSTOMER;
  }

  getRole() {
    return this.role;
  }

  getStatus() {
    return this.status;
  }
  getUserAdmin() {
    return this.userAdmin;
  }

  getUserStaff() {
    return this.userStaff;
  }

  getUserCustomer() {
    return this.userCustomer;
  }
}
