import Fullname from '../../valueObject/admin/userAdminVo/Fullname.js';
import Phone from '../../valueObject/admin/userAdminVo/Phone.js';
import Address from '../../valueObject/admin/userAdminVo/Address.js';
import Position from '../../valueObject/admin/userAdminVo/Position.js';
import UserAdminEntity from '../../entities/admin/userAdmin/UserAdminEntity.js';
import { ResponseError } from '../../../error/ResponseError.js';

export default class UserAdminFactory {
  static async createUserAdmin({userId, fullname, phone, address, position }) {
    const fullnameVo = new Fullname(fullname);
    const phoneVo = new Phone(phone);
    const addressVo = new Address(address);
    const positionVo = new Position(position);

    const userAdmin = new UserAdminEntity({
      userId,
      fullname: fullnameVo.fullname,
      phone: phoneVo.phone,
      address: addressVo.address,
      position: positionVo.position,
    });
    return userAdmin;
  }
}
