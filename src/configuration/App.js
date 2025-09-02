import express from 'express';
import { ErrorMiddleware } from '../middleware/ErrorMiddleware.js';
import PublicRoutes from '../interface/routes/public/index.js';
import AdminRoute from '../interface/routes/admin/index.js';
import cookieParser from 'cookie-parser';
const App = express();

App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cookieParser());

// Public Routes

App.use(PublicRoutes);

// Admin Routes
App.use(AdminRoute);

App.use(ErrorMiddleware);

export default App;
