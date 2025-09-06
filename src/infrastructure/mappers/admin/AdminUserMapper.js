import AdminUserDTO from '../../DTO/admin/AdminUserDTO.js';

export default class AdminUserMapper {
  static userDTO(user) {
    if (!user) return null;
    return AdminUserDTO.userEntityToDTO(user);
  }

  static userDTOList (users) {
    return users.map((user) => this.userDTO(user));
  }
}