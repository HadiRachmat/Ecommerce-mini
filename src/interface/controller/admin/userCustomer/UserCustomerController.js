import AdminUserCustomerService from '../../../../application/services/admin/userCustomer/UserCustomerService.js';
import { validate } from '../../../../validation/validation.js';
import { createUserCustomerValidation } from '../../../../validation/admin/userCustomerValidation.js';
const create = async (req, res, next) => {
  const request = req.body;
  const file = req.file;
  const validatedRequest = validate(createUserCustomerValidation, request);
  console.log('validatedRequest', validatedRequest);
  try {
    const result = await AdminUserCustomerService.createUserCustomer(validatedRequest, file);
    console.log('result', result);
    return res.status(201).json({
      message: 'create user Customer',
      data: result,
    });
  } catch (error) {
    console.log('error message ', error);
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const result = await AdminUserCustomerService.getAllUserCustomer();
    return res.status(200).json({
      message: 'success get all user customers',
      userCustomers: result,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const result = await AdminUserCustomerService.getUserCustomerById(id);
    return res.status(200).json({
      message: 'get user customer by id',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  create,
  getAll,
  getById,
};
