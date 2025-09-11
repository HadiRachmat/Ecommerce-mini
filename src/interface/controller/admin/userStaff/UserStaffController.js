import AdminUserStaffService from '../../../../application/services/admin/userStaff/UserStaffService.js';
import { validate } from '../../../../validation/validation.js';
import { createUserStaffValidation } from '../../../../validation/admin/userStaffValidation.js';

const create = async (req, res, next) => {
  const request = req.body;
  const file = req.file;
  const validatedRequest = validate(createUserStaffValidation, request);
  try {
    const result = await AdminUserStaffService.createUserStaff(validatedRequest, file);
    return res.status(201).json({
      status: ' create user staff',
      data: result,
    });
  } catch (error) {
    console.log('error', error);
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const result = await AdminUserStaffService.findAllUserStaff();
    res.status(200).json({
      message: 'get all data user staff',
      data: result,
    });
  } catch (error) {
    console.log('error', error);
    next(error);
  }
};

const getById = async (req, res, next) => {
  const userStaffId = Number(req.params.id);
  try {
    const result = await AdminUserStaffService.findUserStaffById(userStaffId);
    res.status(200).json({
      message: 'user staff get by id ',
      data: result,
    });
  } catch (error) {
    console.log('error', error);
    next(error);
  }
};

const update = async (req, res, next) => {
  const userStaffId = Number(req.params.id);
  const request = req.body;
  const file = req.file;
  try {
    const result = await AdminUserStaffService.updateUserStaff(userStaffId, request, file);
    res.status(200).json({
      message: ' User Staff update',
      data: result,
    })
  } catch (error) {
    console.log('error', error);
    next(error);
  }
};

const remove = async (req, res, next )=> {
  const userStaffId = Number(req.params.id);
  try {
    const result = await AdminUserStaffService.removeUserStaff(userStaffId);
    res.status(200).json({
      message: ' User Staff delete ',
      data: result,
    })
  } catch (error) {
    console.log('error', error);
    next(error);
  }
}
export default {
  create,
  getAll,
  getById,
  update,
  remove
};
