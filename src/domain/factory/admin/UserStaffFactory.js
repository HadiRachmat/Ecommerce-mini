import UserId from '../../valueObject/admin/userStaffVo/UserId.js';
import Fullname from '../../valueObject/admin/userStaffVo/Fullname.js';
import Phone from '../../valueObject/admin/userStaffVo/Phone.js';
import Address from '../../valueObject/admin/userStaffVo/Address.js';
import Position from '../../valueObject/admin/userStaffVo/Position.js';
import { ResponseError } from '../../../error/ResponseError.js';

export default class UserStaffFactory {
  static async create({ userId, fullname, phone, address, position }) {
    const userIdVo = new UserId(Number(userId));
    const fullnameVo = new Fullname(fullname);
    const phoneVo = new Phone(phone);
    const AddressVo = new Address(address);
    const positionVo = new Position(Number(position));

    const userStaff = {
      userId: userIdVo.userId,
      fullname: fullnameVo.fullname,
      phone: phoneVo.phone,
      address: AddressVo.address,
      position: positionVo.position,
    };
    return userStaff;
  }
}
