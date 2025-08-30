import express from 'express';
import AuthController from '../../../interface/controller/public/index.js';

const PublicRoutes = express.Router();

PublicRoutes.post('/api/auth/register', AuthController.registerUser);
PublicRoutes.post('/api/auth/login', (req, res, next) => {
  res.status(200).json({ message: 'Login route is under construction' });
  next();
});

export default PublicRoutes;
