import Prisma from '../../prisma/prismaClient.js';
import UserStaffEntity from '../../../domain/entities/admin/userStaff/UserStaffEntity.js';

export default class UserStaffRepository {
  static async create(userStaffData) {
    const newUserStaff = await Prisma.usersStaff.create({
      data: userStaffData,
      select: {
        id: true,
        userId: true,
        fullname: true,
        phone: true,
        address: true,
        position: true,
      },
    });

    return newUserStaff ? new UserStaffEntity(newUserStaff) : null;
  }

  static async findByUserId(userId) {
    const findUserId = await Prisma.usersStaff.findUnique({
      where:{
        userId: userId
      },
      select: {
        id: true,
        fullname: true,
      }
    });

    return findUserId ? new UserStaffEntity(findUserId) : null
  }
}
