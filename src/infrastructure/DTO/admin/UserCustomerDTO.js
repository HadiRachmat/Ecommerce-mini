export default class UserCustomerDTO {
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

  static userCustomerList(userCustomer) {
    return new UserCustomerDTO({
      id: userCustomer.getId(),
      userId: userCustomer.getUserId(),
      fullname: userCustomer.getFullname(),
      address: userCustomer.getAddress(),
      placeOfBirth: userCustomer.getPlaceOfBirth(),
      dateOfBirth: userCustomer.getDateOfBirth(),
      gender: userCustomer.getGender(),
      phone: userCustomer.getPhone(),
    });
  }
}
