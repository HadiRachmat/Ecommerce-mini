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

const updateCategory = async (categoryId, request) => {
  const existingCategory = await CategoriesRepository.getCategoryById(categoryId);
  if (!existingCategory) {
    throw new ResponseError(404, 'Category not found');
  }

  const categoriesFactoryRequest = await CategoryFactory.updatedCategory({...request});
  if(!categoriesFactoryRequest) {
    throw new ResponseError(400, 'Invalid category data');
  }
  const duplicateCategory = await CategoriesRepository.getCategoryByName(
    categoriesFactoryRequest.getName(),
    categoriesFactoryRequest.getCategoryParentId()
  )
  if(duplicateCategory && duplicateCategory.id !== categoryId) {
    throw new ResponseError(400, 'Category name already exists');
  }

  const subCategory = await categoriesFactoryRequest.getCategoryParentId();
  if (subCategory) {
    if (categoriesFactoryRequest.getId() && subCategory === categoriesFactoryRequest.getId()) {
      throw new ResponseError(400, 'A category cannot be its own parent');
    }
    const subParentCategory = await CategoriesRepository.getCategoryById(subCategory);
    if (!subParentCategory) {
      throw new ResponseError(400, 'Parent category does not exist');
    }
  }

  const data ={
    name: categoriesFactoryRequest.getName(),
    description: categoriesFactoryRequest.getDescription(),
  }

  if(subCategory) {
    data.categoryParent = { connect: { id: subCategory } };
  } else {
    data.categoryParent = { disconnect: true };
  }

  const updatedCategory = await CategoriesRepository.updateCategory(categoryId, data);
  if (!updatedCategory) {
    throw new ResponseError(500, 'Failed to update category');
  }

  const finalData = {
    message: 'Category updated successfully',
    category: CategoriesMappers.categoriesDTO(updatedCategory),
  };

  return finalData;
}

const removeCategory = async (categoryId) => {
  const existingCategory = await CategoriesRepository.getCategoryById(categoryId);
  if (!existingCategory) {
    throw new ResponseError(404, 'Category not found');
  }
  
  // Additional logic to check for sub-categories or associated products can be added here
  const deletedCategory = await CategoriesRepository.deleteCategory(categoryId);  
  if (!deletedCategory) {
    throw new ResponseError(500, 'Failed to delete category');
  }

  const finalData = {
    message: 'Category deleted successfully',
    category: CategoriesMappers.categoriesDTO(deletedCategory),
  };

  return finalData;
}

export default {
  createCategory,
  getAllCategories,
  getByIdCategories,
  updateCategory,
  removeCategory
};
