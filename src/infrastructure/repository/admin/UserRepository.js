import Prisma from '../../prisma/prismaClient.js';
import AdminUserEntity from '../../../domain/entities/admin/user/AdminUserEntity.js';

export default class AdminUserRepository {
  static async createUser(user) {
    const newUser = await Prisma.users.create({
      data: user,
      select: {
        id: true,
        email: true,
        username: true,
        password: true,
        role: true,
        status: true,
      },
    });

    return newUser ? new AdminUserEntity(newUser) : null;
  }

  static async findByEmail(email) {
    const user = await Prisma.users.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        username: true,
      },
    });

    return user ? new AdminUserEntity(user) : null;
  }

  static async findByUsername(username) {
    const existingUsername = await Prisma.users.findFirst({
      where: { username },
      select: {
        id: true,
        email: true,
        username: true,
      },
    });
    return existingUsername ? new AdminUserEntity(existingUsername) : null;
  }

  static async findById(id) {
    const user = await Prisma.users.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        username: true,
        password: true,
        role: true,
        status: true,
      },
    });
    if (!user) {
      return null;
    }
    return new AdminUserEntity(user);
  }

  static async updatePassword(id, newPassword) {
    const user = await Prisma.users.update({
      where: { id },
      data: {
        password: newPassword,
      },
    });
    if (!user) {
      return null;
    }

    return new AdminUserEntity(user);
  }

  static async findAllUsers() {
    const users = await Prisma.users.findMany({
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
        status: true,
      },
    });
    if (!users) {
      return null;
    }

    return users.map((user) => new AdminUserEntity(user));
  }

  static async updateUser(id, updateUser) {
    const user = await Prisma.users.update({
      where: { id },
      data: updateUser,
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
        status: true,
      },
    });

    return user ? new AdminUserEntity(user) : null;
  }
}
