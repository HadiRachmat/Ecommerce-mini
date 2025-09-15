import AdminCategoriesService from '../../../../application/services/admin/categories/CategoriesService.js';
import { validate } from '../../../../validation/validation.js';
import { createCategoryValidation } from '../../../../validation/admin/categoriesValidation.js';

const create = async (req, res, next) => {
  const request = req.body;
  const validated = validate(createCategoryValidation, request);
  try {
    const result = await AdminCategoriesService.createCategory(validated);
    res.status(201).json(result);
  } catch (error) {
    console.log('message error: ', error);
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const result = await AdminCategoriesService.getAllCategories();
    res.status(200).json({
      message: 'Get All Categories',
      data: result,
    });
  } catch (error) {
    console.log('message error: ', error);
    next(error);
  }
};

const getById = async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const result = await AdminCategoriesService.getByIdCategories(id);
    res.status(200).json({
      message: 'Get Category By Id',
      data: result,
    });
  } catch (error) {
    console.log('message error: ', error);
    next(error);
  }
};

export default {
  create,
  getAll,
  getById
};
