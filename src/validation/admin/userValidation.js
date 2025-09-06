import Joi from 'joi';
import * as CONSTANT from '../../configuration/constant.js';

const adminCreateUserValidation = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
  role: Joi.number()
    .valid(CONSTANT.BASE_ROLE_ADMIN, CONSTANT.BASE_ROLE_CUSTOMER, CONSTANT.BASE_ROLE_STAFF)
    .required()
    .messages({
      'any.only': 'Confirm password does not match password',
    }), // Example roles: 1-Admin, 2-Staff, 3-Customer
  status: Joi.number().valid(CONSTANT.BASE_STATUS_ACTIVE, CONSTANT.BASE_STATUS_ACTIVE).required(), // Example status: 0-Inactive, 1-Active
});

const changeUserPasswordValidation = Joi.object({
  oldPassword: Joi.string().min(6).required(),
  newPassword: Joi.string().min(6).required(),
  confirmNewPassword: Joi.string().valid(Joi.ref('newPassword')).required().messages({
    'any.only': 'Confirm new password does not match new password',
  }),
})
export { adminCreateUserValidation, changeUserPasswordValidation };
