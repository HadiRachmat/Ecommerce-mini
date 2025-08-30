import Joi from 'joi';
import * as CONSTANT from '../../configuration/constant.js';

const register = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Confirm password does not match password',
  }),
  role: Joi.number()
    .valid(CONSTANT.BASE_ROLE_ADMIN, CONSTANT.BASE_ROLE_CUSTOMER, CONSTANT.BASE_ROLE_STAFF)
    .required(),
  status: Joi.number().valid(CONSTANT.BASE_STATUS_ACTIVE, CONSTANT.BASE_STATUS_INACTIVE).required(),
});

export { register };
