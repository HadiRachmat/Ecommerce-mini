import CategoriesRepository from '../../../../infrastructure/repository/admin/CategoriesRepository.js';
import CategoryFactory from '../../../../domain/factory/admin/CategoryFactory.js';
import CategoriesMappers from '../../../../infrastructure/mappers/admin/CategoriesMappers.js';
import { ResponseError } from '../../../../error/ResponseError.js';

const createCategory = async (request) => {
  const categoryFactoryRequest = await CategoryFactory.createCategory(request);

  const existingCategory = await CategoriesRepository.getCategoryByName(
    categoryFactoryRequest.getName(),
    categoryFactoryRequest.getCategoryParentId()
  );
  if (existingCategory) {
    throw new ResponseError(400, 'Category name already exists');
  }

  const subCategory = categoryFactoryRequest.getCategoryParentId();
  if (subCategory) {
    if (categoryFactoryRequest.getId() && subCategory === categoryFactoryRequest.getId()) {
      throw new ResponseError(400, 'A category cannot be its own parent');
    }
    const subParentCategory = await CategoriesRepository.getCategoryById(subCategory);
    if (!subParentCategory) {
      throw new ResponseError(400, 'Parent category does not exist');
    }
  }

  const data = {
    name: categoryFactoryRequest.getName(),
    description: categoryFactoryRequest.getDescription(),
  };

  if (categoryFactoryRequest.getCategoryParentId()) {
    data.categoryParent = { connect: { id: categoryFactoryRequest.getCategoryParentId() } };
  }

  const createNewCategory = await CategoriesRepository.createCategory(data);
  if (!createNewCategory) {
    throw new ResponseError(500, 'Failed to create category');
  }

  const finalData = {
    message: 'Category created successfully',
    category: CategoriesMappers.categoriesDTO(createNewCategory),
  };

  return finalData;
};

const getAllCategories = async () => {
  const categories = await CategoriesRepository.getAllCategories();
  if (!categories || categories.length === 0) {
   return []
  }

  const finalData = {
    message: 'Get all categories successfully',
    categories: categories.map((category) => CategoriesMappers.categoriesDTO(category)),
  }
  
  return finalData;
};

const getByIdCategories = async (categoryId) => {
  const category = await CategoriesRepository.getCategoryById(categoryId);
  if (!category) {
    throw new ResponseError(404, 'Category not found');
  } 
  
  const finalData = {
    message: 'Get category by id successfully',
    category: CategoriesMappers.categoriesDTO(category),
  };
  return finalData;
}

export default {
  createCategory,
  getAllCategories,
  getByIdCategories,
};
