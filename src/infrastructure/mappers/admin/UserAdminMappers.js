import userAdminDTO from '../../DTO/admin/UserAdminDTO.js';

export default class UserAdminMappers {
  static userAdminDTO(userAdmin) {
    if (!userAdmin) return null;
    return userAdminDTO.userAdminEntityToDTO(userAdmin);
  }
}