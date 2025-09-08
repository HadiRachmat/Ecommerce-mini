import userAdminService from '../../../../application/services/admin/userAdmin/UserAdminService.js';
import { createUserAdminValidation } from '../../../../validation/admin/userAdminValidation.js';
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

export default {
  create,
};
