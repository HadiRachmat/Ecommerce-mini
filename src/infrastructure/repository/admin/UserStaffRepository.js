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
      where: {
        userId: userId,
      },
      select: {
        id: true,
        userId: true,
        fullname: true,
        phone: true,
        address: true,
        position: true,
      },
    });

    return findUserId ? new UserStaffEntity(findUserId) : null;
  }

  static async findUserStaffById(userStaffId) {
    const userStaffById = await Prisma.usersStaff.findUnique({
      where: {
        id: userStaffId,
      },
      select: {
        id: true,
        userId: true,
        fullname: true,
        phone: true,
        address: true,
        position: true,
      },
    });

    return userStaffById ? new UserStaffEntity(userStaffById) : null;
  }

  static async findAllUserStaff() {
    const userStaff = await Prisma.usersStaff.findMany({
      select: {
        id: true,
        fullname: true,
        phone: true,
        address: true,
        position: true,
      },
    });

    return userStaff.map((userStaffData) => new UserStaffEntity(userStaffData));
  }

  static async update(userStaffId, userStaffData) {
    const updateUserStaff = await Prisma.usersStaff.update({
      where: {
        id: userStaffId,
      },
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

    return updateUserStaff ? new UserStaffEntity(updateUserStaff) : null;
  }

  static async removeUserStaff(userStaffId) {
    const deleteUserStaff = await Prisma.usersStaff.delete({
      where: { id: userStaffId },
    });
  }
}
