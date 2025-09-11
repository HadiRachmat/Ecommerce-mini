export default class UserStaffDTO {
  constructor({ userId, fullname, phone, address, position } = {}) {
    this.userId = userId;
    this.fullname = fullname;
    this.phone = phone;
    this.address = address;
    this.position = position;
  }

  static userStaffEntityToDTO(userStaff) {
    return new UserStaffDTO({
      userId: userStaff.getUserId(),
      fullname: userStaff.getFullname(),
      phone: userStaff.getPhone(),
      address: userStaff.getAddress(),
      position: Number(userStaff.getPosition()),
    });
  }
}
