import express from 'express';
import { ErrorMiddleware } from '../middleware/ErrorMiddleware.js';
import PublicRoutes from '../interface/routes/public/index.js';
import AdminRoute from '../interface/routes/admin/index.js';

const App = express();

App.use(express.json());

// Public Routes

App.use(PublicRoutes);

// Admin Routes
App.use(AdminRoute)


App.use(ErrorMiddleware);

export default App