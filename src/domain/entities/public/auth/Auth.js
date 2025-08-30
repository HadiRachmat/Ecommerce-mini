export default class Auth {
  constructor({ id, email, username, password, role, status }) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.password = password;
    this.role = role;
    this.status = status;
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

  getRole() {
    return this.role;
  }

  getStatus() {
    return this.status;
  }
}
