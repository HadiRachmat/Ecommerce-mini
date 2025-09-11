export default class UserStaffDTO {
  constructor({id, userId, fullname, phone, address, position } = {}) {
    this.id = id;
    this.userId = userId;
    this.fullname = fullname;
    this.phone = phone;
    this.address = address;
    this.position = position;
  }

  static userStaffEntityToDTO(userStaff) {
    return new UserStaffDTO({
      id: userStaff.getId(),
      userId: userStaff.getUserId(),
      fullname: userStaff.getFullname(),
      phone: userStaff.getPhone(),
      address: userStaff.getAddress(),
      position: Number(userStaff.getPosition()),
    });
  }
}
