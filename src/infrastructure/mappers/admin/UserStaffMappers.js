import UserStaffDTO from "../../DTO/admin/UserStaffDTO.js";

export default class UserStaffMappers {
  static userStaffToDto(userStaff) {
    if (!userStaff) return null;
    return UserStaffDTO.userStaffEntityToDTO(userStaff);
  }
}