import Joi from 'joi';

const createCategoryValidation = Joi.object({
  name: Joi.string().max(100).required(),
  description: Joi.string().max(255).allow(null, ' category description'),
  categoryParentId: Joi.number().integer().allow(null),
});

export {
  createCategoryValidation,
}