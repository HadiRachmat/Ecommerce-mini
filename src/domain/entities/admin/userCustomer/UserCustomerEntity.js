export default class UserCustomerEntity {
  constructor({ id, userId, fullname, address, placeOfBirth, dateOfBirth, gender, phone }) {
    this.id = id;
    this.userId = userId;
    this.fullname = fullname;
    this.address = address;
    this.placeOfBirth = placeOfBirth;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.phone = phone;
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

  getAddress() {
    return this.address;
  }

  getPlaceOfBirth() {
    return this.placeOfBirth;
  }

  getDateOfBirth() {
    return this.dateOfBirth;
  }

  getGender() {
    return this.gender;
  }
  
  getPhone() {
    return this.phone;
  }
}
