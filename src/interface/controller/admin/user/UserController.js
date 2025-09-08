import AdminUserService from '../../../../application/services/admin/user/UserService.js';
import { validate } from '../../../../validation/validation.js';
import {
  adminCreateUserValidation,
  changeUserPasswordValidation,
} from '../../../../validation/admin/userValidation.js';

const create = async (req, res, next) => {
  const request = req.body;
  const validated = validate(adminCreateUserValidation, request);
  delete validated.confirmPassword;
  const file = req.file; // Assuming you're using multer and the file is in req.file
  try {
    const result = await AdminUserService.createAdminUserService(file, validated);
    res.status(200).json({
      message: 'success create admin user',
      data: result,
    });
  } catch (error) {
    console.error('Create admin user error:', error);
    next(error);
  }
};

const changeUserPassword = async (req, res, next) => {
  const userId = Number(req.params.id);
  const request = req.body;
  const validated = validate(changeUserPasswordValidation, request);
  try {
    const result = await AdminUserService.adminChangeUserPassword(
      userId,
      validated.oldPassword,
      validated.newPassword
    );
    res.status(200).json({
      message: 'success change user password',
      data: result,
    });
  } catch (error) {
    console.error('Change user password error:', error);
    next(error);
  }
};

const findAllUsers = async (req, res, next) => {
  try {
    const result = await AdminUserService.AdminFindAllUsers();
    res.status(200).json({
      message: 'success get all users',
      data: result,
    });
  } catch (error) {
    console.error('Get all users error:', error);
    next(error);
  }
};

const findUserById = async (req, res, next) => {
  const userId = Number(req.params.id);
  try {
    const result = await AdminUserService.AdminFindUserById(userId);
    res.status(200).json({
      message: 'success get user by id',
      data: result,
    });
  } catch (error) {
    console.error('Get user by id error:', error);
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const userId = Number(req.params.id);
  const request = req.body;
  const file = req.file;

  console.log('req.body:', req.body);
  console.log('req.file:', req.file);

  try {
    const result = await AdminUserService.AdminUpdateUser(userId, request, file);
    res.status(200).json({
      message: 'success update user',
      data: result,
    });
  } catch (error) {
    console.error('Update user error:', error);
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const userId = Number(req.params.id);
  try {
    const result = await AdminUserService.AdminDeleteUser(userId);
    res.status(200).json({
      message: 'delete user successfully',
    });
  } catch (error) {
    next();
  }
};
export default {
  create,
  changeUserPassword,
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser,
};
