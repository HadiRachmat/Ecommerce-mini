export default class AdminUserDTO {
  constructor({
    id,
    email,
    username,
    // password,
    role,
    status,
    userAdmin,
    userStaff,
    userCustomer,
  } = {}) {
    this.id = id;
    this.email = email;
    this.username = username;
    // this.password = password;
    this.role = role !== undefined && role !== null ? Number(role) : null;
    this.status = status !== undefined && status !== null ? Number(status) : null;
    this.userAdmin = userAdmin;
    this.userStaff = userStaff;
    this.userCustomer = userCustomer;
  }
  static userEntityToDTO(user) {
    return new AdminUserDTO({
      id: user.id,
      email: user.getEmail(),
      username: user.getUsername(),
      // password: user.getPassword(),
      role: Number(user.getRole()),
      status: Number(user.getStatus()),
      userAdmin: user.getUserAdmin(),
      userStaff: user.getUserStaff(),
      userCustomer: user.getUserCustomer(),
    });
  }
}
