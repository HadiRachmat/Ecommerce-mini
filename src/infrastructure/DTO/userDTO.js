export default class UserDTO {
  constructor({ id, email, username, password, role, status } = {}) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.password = password;
    this.role = role ? Number(role) : null; // pastikan angka
    this.status = status ? Number(status) : null;
  }
  static fromEntity(user) {
    return new UserDTO({
      id: user.id,
      email: user.getEmail(),
      username: user.getUsername(),
      // password: user.getPassword(),
      role: Number(user.getRole()),
      status: Number(user.getStatus()),
    });
  }
}
