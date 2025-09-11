import Joi from 'joi';
import * as CONSTANT from '../../configuration/constant.js';

const createUserStaffValidation = Joi.object({
  userId: Joi.number().required(),
  fullname: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  position: Joi.number()
    .integer()
    .valid(
      CONSTANT.BASE_POSITION_CUSTOMER_SERVICE,
      CONSTANT.BASE_POSITION_FINANCE,
      CONSTANT.BASE_POSITION_WAREHOUSE
    )
    .required(),
});

export { createUserStaffValidation };
