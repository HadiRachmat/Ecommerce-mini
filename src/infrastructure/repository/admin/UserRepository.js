import Prisma from '../../prisma/prismaClient.js';
import AdminUserEntity from '../../../domain/entities/admin/user/AdminUserEntity.js';

export default class AdminUserRepository {
  static async createAdminUser(user) {
    const { email, username, password, role, status } = user;
    const newUser = await Prisma.users.create({
      data: {
        email,
        username,
        password,
        role,
        status,
      },
      select: {
        id: true,
        email: true,
        username: true,
        password: true,
        role: true,
        status: true,
      },
    });
    if (!newUser) {
      return null;
    }
    return new AdminUserEntity(newUser);
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
    if (!user) {
      return null;
    }
    return new AdminUserEntity(user);
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
    if (!existingUsername) {
      return null;
    }
    return new AdminUserEntity(existingUsername);
  }
}
