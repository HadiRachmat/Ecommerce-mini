import Prisma from '../../prisma/prismaClient.js';
import CategoriesEntity from '../../../domain/entities/admin/categories/CategoriesEntity.js';

export default class CategoriesRepository {
  /**
   * CREATE CATEGORY
   * @param {*} request
   * @returns
   */
  static async createCategory(request) {
    const categories = await Prisma.categories.create({
      data: request,
      select: {
        id: true,
        name: true,
        description: true,
        categoryParentId: true,
      },
    });
    return categories ? new CategoriesEntity(categories) : null;
  }

  /**
   * GET CATEGORY BY NAME
   * @param {*} categoryName
   * @param {*} parentId
   * @returns
   */
  static async getCategoryByName(categoryName, parentId) {
    const category = await Prisma.categories.findFirst({
      where: { name: categoryName, categoryParentId: parentId || null },
      select: {
        id: true,
        name: true,
        description: true,
        categoryParentId: true,
      },
    });
    return category ? new CategoriesEntity(category) : null;
  }

  /**
   * GET CATEGORY BY PARENT ID
   * @param {*} categoryParentId
   * @returns
   */
  static async getCategoryByParentId(categoryParentId) {
    const categories = await Prisma.categories.findFirst({
      where: { categoryParentId: categoryParentId },
      select: {
        id: true,
        name: true,
        description: true,
        categoryParentId: true,
        categoriesChildren: true
      },
    });
    return categories ? new CategoriesEntity(categories) : null;
  }

  /**
   * GET CATEGORY BY ID
   * @param {*} categoryId
   * @returns
   */
  static async getCategoryById(categoryId) {
    const category = await Prisma.categories.findUnique({
      where: { id: categoryId },
      select: {
        id: true,
        name: true,
        description: true,
        categoryParentId: true,
        categoriesChildren: {
          select : {
            id: true,
            name: true,
            description: true,
            categoryParentId: true,
            categoriesChildren: true
          }
        },
      },
    });
    return category ? new CategoriesEntity(category) : null;
  }

  /**
   * CREATE SUB CATEGORY
   * @param {*} request
   * @returns
   */
  static async createSubCategory(request) {
    const subCategory = await Prisma.categories.create({
      data: request,
      select: {
        id: true,
        name: true,
        description: true,
        categoryParentId: true,
      },
    });
    return subCategory ? new CategoriesEntity(subCategory) : null;
  }

  static async getAllCategories() {
    const categories = await Prisma.categories.findMany({
      include:{
        categoriesChildren: {
          include: {
            categoriesChildren: {
              include: {
                categoriesChildren: true
              }
            }
          }
        }
      }
    });

    return categories.map((category) => new CategoriesEntity(category));
  }
}
