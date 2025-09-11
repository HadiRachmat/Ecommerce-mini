import userAdminService from '../../../../application/services/admin/userAdmin/UserAdminService.js';
import {
  createUserAdminValidation,
  updateUserAdminValidation,
} from '../../../../validation/admin/userAdminValidation.js';
import { validate } from '../../../../validation/validation.js';

const create = async (req, res, next) => {
  const userId = req.user.id;
  const requestData = req.body;
  const file = req.file;
  const validatedData = validate(createUserAdminValidation, requestData);
  try {
    const result = await userAdminService.createUserAdmin(userId, validatedData, file);
    return res.status(201).json(result);
  } catch (error) {
    console.error('Error creating user admin:', error);
    next(error);
  }
};

const getById = async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const result = await userAdminService.getUserAdminById(id);
    return res.status(200).json({
      message: 'User admin fetched successfully',
      data: result,
    });
  } catch (error) {
    console.error('Error fetching user admin by ID:', error);
    next(error);
  }
};

const update = async (req, res, next) => {
  const id = Number(req.params.id);
  const requestData = req.body;
  const file = req.file;
  const validatedData = validate(updateUserAdminValidation, requestData);
  try {
    const result = await userAdminService.updateUserAdmin(id, validatedData, file);
    return res.status(200).json({
      message: 'User admin updated successfully',
      data: result,
    });
  } catch (error) {
    console.error('Error updating user admin:', error);
    next(error);
  }
};

const remove = async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const result = await userAdminService.deleteUserAdmin(id);
    return res.status(200).json({
      message: 'User admin deleted successfully',
      data: result,
    });
  } catch (error) {
    console.error('Error deleting user admin:', error);
    next(error);
  }
};
export default {
  create,
  getById,
  update,
  remove,
};
