import express from 'express';
import { AuthMiddleware, AuthorizeRole } from '../../../middleware/AuthMiddleware.js';

import AdminUserController from '../../controller/admin/user/UserController.js';

import * as CONSTANT from '../../../configuration/constant.js';

const AdminRoute = express.Router();

/*
  |====================================================================|
  ===================== {USER ROUTE} =====================
  |====================================================================|
*/
AdminRoute.post(
  '/api/admin/user/create',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  AdminUserController.create
);
AdminRoute.get(
  '/api/admin/user',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  AdminUserController.findAllUsers
);
AdminRoute.get(
  '/api/admin/user/:id',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  AdminUserController.findUserById
);
AdminRoute.put(
  '/api/admin/user/:id/update',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  AdminUserController.updateUser
);
AdminRoute.put(
  '/api/admin/user/:id/change-password',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  AdminUserController.changeUserPassword
);
AdminRoute.delete(
  '/api/admin/user/:id/delete',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Delete User route is under construction' });
    next();
  }
);

/*
  |====================================================================|
  ===================== {ADMIN USER ADMIN ROUTE} ===================== 
  |====================================================================|
*/
AdminRoute.post(
  '/api/admin/user-admin/create',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Create User Admin route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/user-admin',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get User Admin route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/user-admin/:id',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get By Id User Admin route is under construction' });
    next();
  }
);
AdminRoute.put(
  '/api/admin/user-admin/:id/update',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Updated User Admin route is under construction' });
    next();
  }
);
AdminRoute.delete(
  '/api/admin/user-admin/:id/delete',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Delete User Admin route is under construction' });
    next();
  }
);

/*
  |====================================================================|
  ===================== {ADMIN USER STAFF ROUTE} ===================== 
  |====================================================================|
*/
AdminRoute.post(
  '/api/admin/user-staff/create',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Create User Staff route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/user-staff/',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get User Staff route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/user-staff/:id',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get By Id User Staff route is under construction' });
    next();
  }
);
AdminRoute.put(
  '/api/admin/user-staff/:id/update',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Update User Staff route is under construction' });
    next();
  }
);
AdminRoute.delete(
  '/api/admin/user-staff/:id/delete',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Delete User Staff route is under construction' });
    next();
  }
);

/*
  |====================================================================|
  ===================== {ADMIN USER CUSTOMER ROUTE} ====================
  |====================================================================| 
*/
AdminRoute.post(
  '/api/admin/user-customer/create',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Create User Customer route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/user-customer',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get User Customer route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/user-customer/:id',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get By Id User Customer route is under construction' });
    next();
  }
);
AdminRoute.put(
  '/api/admin/user-customer/:id/update',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Update User Customer route is under construction' });
    next();
  }
);
AdminRoute.delete(
  '/api/admin/user-customer/:id/delete',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Delete User Customer route is under construction' });
    next();
  }
);

/* 
  |====================================================================|
  ===================== {ADMIN CATEOGRIES ROUTE} ===================== 
  |====================================================================|
*/
AdminRoute.post(
  '/api/admin/categories/create',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Create Categories route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/categories',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get Categories route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/categories/:id',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get By Id Categories route is under construction' });
    next();
  }
);
AdminRoute.put(
  '/api/admin/categories/:id/update',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Updated Categories route is under construction' });
    next();
  }
);
AdminRoute.delete(
  '/api/admin/categories/:id/delete',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Delete Categories route is under construction' });
    next();
  }
);

/*
  |====================================================================|
  ===================== {ADMIN PRODUCTS ROUTE} ===================== 
  |====================================================================|
*/
AdminRoute.post(
  '/api/admin/products/create',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Create Products route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/products',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get Products route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/products/:id',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get By Id Products route is under construction' });
    next();
  }
);
AdminRoute.put(
  '/api/admin/products/:id/update',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Updated Products route is under construction' });
    next();
  }
);
AdminRoute.delete(
  '/api/admin/products/:id/delete',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Delete Products route is under construction' });
    next();
  }
);

/*
  |====================================================================| 
  ===================== {ADMIN CARTS ROUTE} =========================== 
  |====================================================================|
*/
AdminRoute.post(
  '/api/admin/carts/create',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Create Carts route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/carts',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get Carts route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/carts/:id',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get By Id Carts route is under construction' });
    next();
  }
);
AdminRoute.put(
  '/api/admin/carts/:id/update',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Updated Carts route is under construction' });
    next();
  }
);
AdminRoute.delete(
  '/api/admin/carts/:id/delete',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Delete Carts route is under construction' });
    next();
  }
);

/* 
  |====================================================================|
  ===================== {ADMIN CARTS ITEMS ROUTE} ===================== 
  |====================================================================|
*/
AdminRoute.post(
  '/api/admin/carts-items/create',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Create Carts Items route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/carts-items',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get Carts Items route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/carts-items/:id',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get By Id Carts Items route is under construction' });
    next();
  }
);
AdminRoute.put(
  '/api/admin/carts-items/:id/update',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Updated Carts Items route is under construction' });
    next();
  }
);
AdminRoute.delete(
  '/api/admin/carts-items/:id/delete',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Delete Carts Items route is under construction' });
    next();
  }
);

/* 
  |====================================================================|
  ===================== {ADMIN ORDERS ROUTE} ===================== 
  |====================================================================|
*/
AdminRoute.post(
  '/api/admin/orders/create',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Create Orders route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/orders',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get Orders route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/orders/:id',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get By Id Orders route is under construction' });
    next();
  }
);
AdminRoute.put(
  '/api/admin/orders/:id/update',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Updated Orders route is under construction' });
    next();
  }
);
AdminRoute.delete(
  '/api/admin/orders/:id/delete',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Delete Orders route is under construction' });
    next();
  }
);

/* 
  |====================================================================|
  ===================== {ADMIN ORDERS ITEM ROUTE} ===================== 
  |====================================================================|
*/
AdminRoute.post(
  '/api/admin/orders-items/create',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Create Orders Items route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/orders-items',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get Orders Items route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/orders-items/:id',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get By Id Orders Items route is under construction' });
    next();
  }
);
AdminRoute.put(
  '/api/admin/orders-items/:id/update',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Updated Orders Items route is under construction' });
    next();
  }
);
AdminRoute.delete(
  '/api/admin/orders-items/:id/delete',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Delete Orders Items route is under construction' });
    next();
  }
);

/* 
  |====================================================================|
  ===================== {ADMIN PAYMENTS ROUTE} ===================== 
  |====================================================================|
*/
AdminRoute.post(
  '/api/admin/payments/create',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Create Payments route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/payments',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get Payments route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/payments/:id',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get By Id Payments route is under construction' });
    next();
  }
);
AdminRoute.put(
  '/api/admin/payments/:id/update',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Updated Payments route is under construction' });
    next();
  }
);
AdminRoute.delete(
  '/api/admin/payments/:id/delete',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Delete Payments route is under construction' });
    next();
  }
);

/* 
  |====================================================================|
  ===================== {ADMIN PAYMENTS CONFIRMATION ROUTE} ===================== 
  |====================================================================|
*/
AdminRoute.post(
  '/api/admin/payments-confirmation/create',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Create Payments Confirmation route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/payments-confirmation',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Get Payments Confirmation route is under construction' });
    next();
  }
);
AdminRoute.get(
  '/api/admin/payments-confirmation/:id',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res
      .status(200)
      .json({ message: 'Get By Id Payments Confirmation route is under construction' });
    next();
  }
);
AdminRoute.put(
  '/api/admin/payments-confirmation/:id/update',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Updated Payments Confirmation route is under construction' });
    next();
  }
);
AdminRoute.delete(
  '/api/admin/payments-confirmation/:id/delete',
  AuthMiddleware,
  AuthorizeRole(CONSTANT.BASE_ROLE_ADMIN),
  (req, res, next) => {
    res.status(200).json({ message: 'Delete Payments Confirmation route is under construction' });
    next();
  }
);

export default AdminRoute;
