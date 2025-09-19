import AdminProductService from '../../../../application/services/admin/product/productService.js';
import { validate } from '../../../../validation/validation.js';
import { createProductSchema } from '../../../../validation/admin/productValidation.js';

const create = async (req, res, next) => {
  const request = req.body;
  const files = req.files;
  const validated= validate(createProductSchema, request);
  try {
    const result = await AdminProductService.createProduct(validated, files);
    res.status(201).json({
      status: 'Admin create Product',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
export default {
  create,
};

