import express from 'express';
import { ErrorMiddleware } from '../middleware/ErrorMiddleware.js';
import PublicRoutes from '../interface/routes/public/index.js';
import AdminRoute from '../interface/routes/admin/index.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const App = express();

App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cookieParser());
//
App.use('/upload', express.static(path.join(__dirname, '../../upload')));
// Public Routes
App.use(PublicRoutes);
// Admin Routes
App.use(AdminRoute);

App.use(ErrorMiddleware);

export default App;
