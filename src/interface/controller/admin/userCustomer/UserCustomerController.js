import AdminUserCustomerService from '../../../../application/services/admin/userCustomer/UserCustomerService.js';
import { validate } from '../../../../validation/validation.js';
import {
  createUserCustomerValidation,
  updateUserCustomerValidation,
} from '../../../../validation/admin/userCustomerValidation.js';
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

const update = async (req, res, next) => {
  const userCustomerId = Number(req.params.id);
  const request = req.body;
  const validatedRequest = validate(updateUserCustomerValidation, request);
  const file = req.file;
  try {
    const result = await AdminUserCustomerService.updateUserCustomer(
      userCustomerId,
      validatedRequest,
      file
    );
    res.status(200).json({
      message: 'update User Customer',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  const userCustomerId = Number(req.params.id);
  try {
    const result = await AdminUserCustomerService.removeUserCustomer(userCustomerId);
    res.status(200).json({
      message: 'delete user customer',
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
  update,
  remove,
};
