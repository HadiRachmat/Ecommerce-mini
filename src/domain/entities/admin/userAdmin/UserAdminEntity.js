export default class UserAdminEntity {
  constructor({ id, userId, fullname, phone, address, position }) {
    this.id = id;
    this.userId = userId;
    this.fullname = fullname;
    this.phone = phone;
    this.address = address;
    this.position = position;
  }
  getId() {
    return this.id;
  }
  getUserId() {
    return this.userId;
  }
  getFullname() {
    return this.fullname;
  }
  getPhone() {
    return this.phone;
  }
  getAddress() {
    return this.address;
  }
  getPosition() {
    return this.position;
  }
}
