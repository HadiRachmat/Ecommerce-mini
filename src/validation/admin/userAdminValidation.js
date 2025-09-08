import Joi from 'joi';
import * as CONSTANT from '../../configuration/constant.js';

const createUserAdminValidation = Joi.object({
  fullname: Joi.string().min(3).max(100).required(),
  phone: Joi.string().min(10).max(15).required(),
  address: Joi.string().min(10).max(255).required(),
  position: Joi.number().valid(CONSTANT.BASE_POSITION_SUPERADMIN).default(1).required(),
});

export { createUserAdminValidation };
