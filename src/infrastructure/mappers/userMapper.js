import UserDTO from "../DTO/userDTO.js";

export default class UserMapper {
  static toDTO(user) {
    if (!user) return null;
    return UserDTO.fromEntity(user);
  }
}