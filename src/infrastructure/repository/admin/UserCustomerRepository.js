import Prisma from '../../prisma/prismaClient.js';
import UserCustomerEntity from '../../../domain/entities/admin/userCustomer/UserCustomerEntity.js';

export default class UserCustomerRepository {
  static async create(userCustomerData) {
    const newUserCustomer = await Prisma.userCustomer.create({
      data: userCustomerData,
      select: {
        id: true,
        userId: true,
        fullname: true,
        address: true,
        placeOfBirth: true,
        dateOfBirth: true,
        gender: true,
        phone: true,
      },
    });
    return newUserCustomer ? new UserCustomerEntity(newUserCustomer) : null;
  }

  static async findByUserId(userId) {
    const userCustomer = await Prisma.userCustomer.findUnique({
      where: { userId },
      select: {
        id: true,
        userId: true,
        fullname: true,
        address: true,
        placeOfBirth: true,
        dateOfBirth: true,
        gender: true,
        phone: true,
      },
    });

    return userCustomer ? new UserCustomerEntity(userCustomer) : null;
  }

  static async findUserCustomerById(userCustomerId) {
    const userCustomer = await Prisma.userCustomer.findUnique({
      where: {
        id: userCustomerId,
      },
      select: {
        id: true,
        userId: true,
        fullname: true,
        address: true,
        placeOfBirth: true,
        dateOfBirth: true,
        gender: true,
        phone: true,
      },
    });

    return userCustomer ? new UserCustomerEntity(userCustomer) : null;
  }

  static async findAllUserCustomers() {
    const userCustomer = await Prisma.userCustomer.findMany({
      select: {
        id: true,
        userId: true,
        fullname: true,
        address: true,
        placeOfBirth: true,
        dateOfBirth: true,
        gender: true,
        phone: true,
      },
    });
    return userCustomer.length
      ? userCustomer.map((userCustomer) => new UserCustomerEntity(userCustomer))
      : [];
  }

  static async update(userCustomerId, updateUserCustomer) {
    const updateUserCustomerData = await Prisma.userCustomer.update({
      where: {
        id: userCustomerId,
      },
      data: updateUserCustomer,
      select: {
        id: true,
        userId: true,
        fullname: true,
        address: true,
        placeOfBirth: true,
        dateOfBirth: true,
        gender: true,
        phone: true,
      },
    });
    return updateUserCustomerData ? new UserCustomerEntity(updateUserCustomerData) : null;
  }

  static async removeUserCustomer(userCustomerId) {
    const deleteUserCustomer = await Prisma.userCustomer.delete({
      where: {
        id: userCustomerId,
      },
      select: {
        id: true,
        userId: true,
        fullname: true,
        address: true,
        placeOfBirth: true,
        dateOfBirth: true,
        gender: true,
        phone: true,
      },
    });
    return deleteUserCustomer ? new UserCustomerEntity(deleteUserCustomer) : null;
  }
}
