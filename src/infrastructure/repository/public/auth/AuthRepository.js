import Prisma from '../../../prisma/prismaClient.js';
import Auth from '../../../../domain/entities/public/auth/Auth.js';

export default class AuthRepository {
  static async registerUser(user) {
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

    return new Auth(newUser);
  }

  static async findByEmail(email) {
    const user = await Prisma.users.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        username: true,
        password: true,
        userAdmin: { select: { id: true } },
        userStaff: { select: { id: true } },
        userCustomer: { select: { id: true } },
        role: true,
        status: true,
      },
    });

    return new Auth(user);
  }

  static async findById(id) {
    const user = await Prisma.users.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
        status: true,
      },
    });

    return new Auth(user);
  }
}
