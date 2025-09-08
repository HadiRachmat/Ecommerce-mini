export default class userAdminDTO {
  constructor({ id, userId, fullname, phone, address, position } = {}) {
    this.id = id;
    this.userId = userId;
    this.fullname = fullname;
    this.phone = phone;
    this.address = address;
    this.position = position;
  }

  static userAdminEntityToDTO(userAdmin) {
    return new userAdminDTO({
      id: userAdmin.getId(),
      userId: userAdmin.getUserId(),
      fullname: userAdmin.getFullname(),
      phone: userAdmin.getPhone(),
      address: userAdmin.getAddress(),
      position: userAdmin.getPosition(),
    });
  }
}
