import UserId from '../../valueObject/admin/userCustomer/UserId.js';
import Fullname from '../../valueObject/admin/userCustomer/Fullname.js';
import Address from '../../valueObject/admin/userCustomer/Address.js';
import PlaceOfBirth from '../../valueObject/admin/userCustomer/PlaceOfBirth.js';
import DateOfBirth from '../../valueObject/admin/userCustomer/DateOfBirth.js';
import Gender from '../../valueObject/admin/userCustomer/Gender.js';
import Phone from '../../valueObject/admin/userCustomer/Phone.js';
import UserCustomerEntity from '../../entities/admin/userCustomer/UserCustomerEntity.js';

export default class UserCustomerFactory {
  static async create({ userId, fullname, address, placeOfBirth, dateOfBirth, gender, phone }) {
    const userIdVo = new UserId(Number(userId));
    const fullnameVo = new Fullname(fullname);
    const addressVo = new Address(address);
    const placeOfBirthVo = new PlaceOfBirth(placeOfBirth);
    const dateOfBirthVo = new DateOfBirth(dateOfBirth);
    const genderVo = new Gender(Number(gender));
    const phoneVo = new Phone(phone);

    const userCustomer = new UserCustomerEntity({
      userId: userIdVo.userId,
      fullname: fullnameVo.fullname,
      address: addressVo.address,
      placeOfBirth: placeOfBirthVo.placeOfBirth,
      dateOfBirth: dateOfBirthVo.dateOfBirth,
      gender: genderVo.gender,
      phone: phoneVo.phone,
    });

    return userCustomer;
  }
}
