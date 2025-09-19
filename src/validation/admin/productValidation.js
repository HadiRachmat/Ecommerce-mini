import Joi from 'joi';

export const createProductSchema = Joi.object({
  categoryId: Joi.number().integer().required(),
  subCategoryId: Joi.number().integer().required(),
  name: Joi.string().max(100).required(),
  description: Joi.string().max(255).allow(null, ''),
  price: Joi.string().max(100).required(),
  stock: Joi.number().integer().required(),
});

export const updateProductSchema = Joi.object({
  categoryId: Joi.number().integer(),
  subCategoryId: Joi.number().integer(),
  name: Joi.string().max(100),
  description: Joi.string().max(255).allow(null, ''),
  price: Joi.string().max(100),
  stock: Joi.number().integer(),
}); 
