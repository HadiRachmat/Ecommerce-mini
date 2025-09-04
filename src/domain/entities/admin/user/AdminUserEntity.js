export default class AdminUserEntity {
  constructor({ id, email, password, username, role, status, userAdmin, userStaff, userCustomer}) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.username = username;
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

  getPassword() {
    return this.password;
  }
  getUsername() {
    return this.username;
  }

  getRole() {
    return this.role;
  }

  getStatus() {
    return this.status;
  }
  getUserAdmin(){
    return this.userAdmin;
  }
  
  getUserStaff () {
    return this.userStaff;
  }

  getUserCustomer () {
    return this.userCustomer;
  }
}
