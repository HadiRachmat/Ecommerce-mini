import Prisma from '../../prisma/prismaClient.js';
import userAdminEntity from '../../../domain/entities/admin/userAdmin/UserAdminEntity.js';

export default class UserAdminRepository {
  static async createUserAdmin(request) {
    const userAdmin = await Prisma.userAdmin.create({
      data: request,
      select: {
        id: true,
        userId: true,
        fullname: true,
        phone: true,
        address: true,
        position: true,
      },
    });

    return userAdmin ? new userAdminEntity(userAdmin) : null;
  }

  static async findAllUserAdmin() {
    const userAdmin = await Prisma.userAdmin.findMany({
      select: {
        id: true,
        userId: true,
        fullname: true,
        phone: true,
        address: true,
        position: true,
      },
    });
    return userAdmin.map((user) => userAdminEntity(user));
  }

  static async findById(id) {
    const userAdmin = await Prisma.userAdmin.findUnique({
      where: {
        id,
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
    return userAdmin ? userAdminEntity(userAdmin) : null;
  }

  static async updateUserAdmin(id, request) {
    const userAdmin = await Prisma.userAdmin.update({
      where: { id },
      data: request,
      select: {
        id: true,
        userId: true,
        fullname: true,
        phone: true,
        address: true,
        position: true,
      },
    });
    return userAdmin ? userAdminEntity(userAdmin) : null;
  }

  static async deleteUserAdmin(id) {
    const userAdmin = await Prisma.userAdmin.delete({
      where: { id },
    });
    return userAdmin ? userAdminEntity(userAdmin) : null;
  }
}
