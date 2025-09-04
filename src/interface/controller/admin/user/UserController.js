import AdminUserService from '../../../../application/services/admin/user/UserService.js';
import { validate } from '../../../../validation/validation.js';
import { adminCreateUserValidation } from '../../../../validation/admin/userValidation.js';

const create = async (req, res, next) => {
  const request = req.body;
  const validated = validate(adminCreateUserValidation, request);
  try {
    const result = await AdminUserService.createAdminUserService(validated);
    res.status(200).json({
      message: 'success create admin user',
      data: result,
    });
  } catch (error) {
    console.error('Create admin user error:', error);
    next(error);
  }
};

export default {
  create,
}
