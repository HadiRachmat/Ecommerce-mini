import express from 'express';
import AuthController from '../../../interface/controller/public/index.js';

const PublicRoutes = express.Router();

PublicRoutes.post('/api/auth/register', AuthController.registerUser);
PublicRoutes.post('/api/auth/login', AuthController.loginUser);

export default PublicRoutes;
