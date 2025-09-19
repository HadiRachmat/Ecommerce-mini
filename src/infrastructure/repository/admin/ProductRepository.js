import Prisma from '../../prisma/prismaClient.js';
import ProductEntity from '../../../domain/entities/admin/product/ProductEntity.js';

export default class ProductRepository {
  static async create(request) {
    const product = await Prisma.products.create({
      data: request,
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        stock: true,
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        subCategoryId: true,
        subCategory: true,
      },
    });

    return product ? new ProductEntity(product) : null;
  }

  static async findById(productId) {
    const product = await Prisma.products.findUnique({
      where: {
        id: productId,
      },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        stock: true,
        category: {
          select: {
            id: true,
            name: true,
            categoriesChildren: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    return product ? new ProductEntity(product) : null;
  }

  static async findAll() {
    const products = await Prisma.products.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        stock: true,
        category: {
          select: {
            id: true,
            name: true,
            categoriesChildren: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    return products.map((product) => new ProductEntity(product));
  }
}
