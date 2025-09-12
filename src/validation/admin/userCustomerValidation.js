import Joi from 'joi';
import * as CONSTANT from '../../configuration/constant.js';

const createUserCustomerValidation = Joi.object({
  userId: Joi.number().integer().required(),
  fullname: Joi.string().min(3).max(100).required(),
  address: Joi.string().min(10).max(255).required(),
  placeOfBirth: Joi.string().min(3).max(100).required(),
  dateOfBirth: Joi.date().required(),
  gender: Joi.number().valid(CONSTANT.BASE_GENDER_FEMALE, CONSTANT.BASE_GENDER_MALE).required(),
  phone: Joi.string().min(10).max(15).required(),
});

const updateUserCustomerValidation = Joi.object({
  fullname: Joi.string().min(3).max(100).optional(),
  address: Joi.string().min(10).max(255).optional(),
  placeOfBirth: Joi.string().min(3).max(100).optional(),
  dateOfBirth: Joi.date().optional(),
  gender: Joi.number().valid(CONSTANT.BASE_GENDER_FEMALE, CONSTANT.BASE_GENDER_MALE).optional(),
  phone: Joi.string().min(10).max(15).optional(),
});

export { createUserCustomerValidation, updateUserCustomerValidation };
