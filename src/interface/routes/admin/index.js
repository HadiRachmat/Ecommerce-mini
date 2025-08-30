import express from 'express';

const AdminRoute = express.Router();

/* ===================== {USER ROUTE} ===================== */
AdminRoute.post('/api/admin/user/create', (req, res, next) => {
  res.status(200).json({ message: 'Create User route is under construction' });
  next();
});
AdminRoute.get('/api/admin/user', (req, res, next) => {
  res.status(200).json({ message: 'Get User route is under construction' });
  next();
});
AdminRoute.get('/api/admin/user/:id', (req, res, next) => {
  res.status(200).json({ message: 'Get By Id User route is under construction' });
  next();
});
AdminRoute.put('/api/admin/user/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'Updated User route is under construction' });
  next();
});
AdminRoute.delete('/api/admin/user/:id/delete', (req, res, next) => {
  res.status(200).json({ message: 'Delete User route is under construction' });
  next();
});

/* ===================== {ADMIN USER ADMIN ROUTE} ===================== */
AdminRoute.post('/api/admin/user-admin/create', (req, res, next) => {
  res.status(200).json({ message: 'Create User Admin route is under construction' });
  next();
});
AdminRoute.get('/api/admin/user-admin', (req, res, next) => {
  res.status(200).json({ message: 'Get User Admin route is under construction' });
  next();
});
AdminRoute.get('/api/admin/user-admin/:id', (req, res, next) => {
  res.status(200).json({ message: 'Get By Id User Admin route is under construction' });
  next();
});
AdminRoute.put('/api/admin/user-admin/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'Updated User Admin route is under construction' });
  next();
});
AdminRoute.delete('/api/admin/user-admin/:id/delete', (req, res, next) => {
  res.status(200).json({ message: 'Delete User Admin route is under construction' });
  next();
});

/* ===================== {ADMIN USER STAFF ROUTE} ===================== */
AdminRoute.post('/api/admin/user-staff/create', (req, res, next) => {
  res.status(200).json({ message: 'Create User Staff route is under construction' });
  next();
});
AdminRoute.get('/api/admin/user-staff/', (req, res, next) => {
  res.status(200).json({ message: 'Get User Staff route is under construction' });
  next();
});
AdminRoute.get('/api/admin/user-staff/:id', (req, res, next) => {
  res.status(200).json({ message: 'Get By Id User Staff route is under construction' });
  next();
});
AdminRoute.put('/api/admin/user-staff/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'Update User Staff route is under construction' });
  next();
});
AdminRoute.delete('/api/admin/user-staff/:id/delete', (req, res, next) => {
  res.status(200).json({ message: 'Delete User Staff route is under construction' });
  next();
});

/* ===================== {ADMIN USER CUSTOMER ROUTE} ===================== */
AdminRoute.post('/api/admin/user-customer/create', (req, res, next) => {
  res.status(200).json({ message: 'Create User Customer route is under construction' });
  next();
});
AdminRoute.get('/api/admin/user-customer', (req, res, next) => {
  res.status(200).json({ message: 'Get User Customer route is under construction' });
  next();
});
AdminRoute.get('/api/admin/user-customer/:id', (req, res, next) => {
  res.status(200).json({ message: 'Get By Id User Customer route is under construction' });
  next();
});
AdminRoute.put('/api/admin/user-customer/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'Update User Customer route is under construction' });
  next();
});
AdminRoute.delete('/api/admin/user-customer/:id/delete', (req, res, next) => {
  res.status(200).json({ message: 'Delete User Customer route is under construction' });
  next();
});

/* ===================== {ADMIN CATEOGRIES ROUTE} ===================== */
AdminRoute.post('/api/admin/categories/create', (req, res, next) => {
  res.status(200).json({ message: 'Create Categories route is under construction' });
  next();
});
AdminRoute.get('/api/admin/categories', (req, res, next) => {
  res.status(200).json({ message: 'Get Categories route is under construction' });
  next();
});
AdminRoute.get('/api/admin/categories/:id', (req, res, next) => {
  res.status(200).json({ message: 'Get By Id Categories route is under construction' });
  next();
});
AdminRoute.put('/api/admin/categories/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'Updated Categories route is under construction' });
  next();
});
AdminRoute.delete('/api/admin/categories/:id/delete', (req, res, next) => {
  res.status(200).json({ message: 'Delete Categories route is under construction' });
  next();
});

/* ===================== {ADMIN PRODUCTS ROUTE} ===================== */
AdminRoute.post('/api/admin/products/create', (req, res, next) => {
  res.status(200).json({ message: 'Create Products route is under construction' });
  next();
});
AdminRoute.get('/api/admin/products', (req, res, next) => {
  res.status(200).json({ message: 'Get Products route is under construction' });
  next();
});
AdminRoute.get('/api/admin/products/:id', (req, res, next) => {
  res.status(200).json({ message: 'Get By Id Products route is under construction' });
  next();
});
AdminRoute.put('/api/admin/products/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'Updated Products route is under construction' });
  next();
});
AdminRoute.delete('/api/admin/products/:id/delete', (req, res, next) => {
  res.status(200).json({ message: 'Delete Products route is under construction' });
  next();
});

/* ===================== {ADMIN CARTS ROUTE} ===================== */
AdminRoute.post('/api/admin/carts/create', (req, res, next) => {
  res.status(200).json({ message: 'Create Carts route is under construction' });
  next();
});
AdminRoute.get('/api/admin/carts', (req, res, next) => {
  res.status(200).json({ message: 'Get Carts route is under construction' });
  next();
});
AdminRoute.get('/api/admin/carts/:id', (req, res, next) => {
  res.status(200).json({ message: 'Get By Id Carts route is under construction' });
  next();
});
AdminRoute.put('/api/admin/carts/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'Updated Carts route is under construction' });
  next();
});
AdminRoute.delete('/api/admin/carts/:id/delete', (req, res, next) => {
  res.status(200).json({ message: 'Delete Carts route is under construction' });
  next();
});

/* ===================== {ADMIN CARTS ITEMS ROUTE} ===================== */
AdminRoute.post('/api/admin/carts-items/create', (req, res, next) => {
  res.status(200).json({ message: 'Create Carts Items route is under construction' });
  next();
});
AdminRoute.get('/api/admin/carts-items', (req, res, next) => {
  res.status(200).json({ message: 'Get Carts Items route is under construction' });
  next();
});
AdminRoute.get('/api/admin/carts-items/:id', (req, res, next) => {
  res.status(200).json({ message: 'Get By Id Carts Items route is under construction' });
  next();
});
AdminRoute.put('/api/admin/carts-items/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'Updated Carts Items route is under construction' });
  next();
});
AdminRoute.delete('/api/admin/carts-items/:id/delete', (req, res, next) => {
  res.status(200).json({ message: 'Delete Carts Items route is under construction' });
  next();
});

/* ===================== {ADMIN ORDERS ROUTE} ===================== */
AdminRoute.post('/api/admin/orders/create', (req, res, next) => {
  res.status(200).json({ message: 'Create Orders route is under construction' });
  next();
});
AdminRoute.get('/api/admin/orders', (req, res, next) => {
  res.status(200).json({ message: 'Get Orders route is under construction' });
  next();
});
AdminRoute.get('/api/admin/orders/:id', (req, res, next) => {
  res.status(200).json({ message: 'Get By Id Orders route is under construction' });
  next();
});
AdminRoute.put('/api/admin/orders/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'Updated Orders route is under construction' });
  next();
});
AdminRoute.delete('/api/admin/orders/:id/delete', (req, res, next) => {
  res.status(200).json({ message: 'Delete Orders route is under construction' });
  next();
});

/* ===================== {ADMIN ORDERS ITEM ROUTE} ===================== */
AdminRoute.post('/api/admin/orders-items/create', (req, res, next) => {
  res.status(200).json({ message: 'Create Orders Items route is under construction' });
  next();
});
AdminRoute.get('/api/admin/orders-items', (req, res, next) => {
  res.status(200).json({ message: 'Get Orders Items route is under construction' });
  next();
});
AdminRoute.get('/api/admin/orders-items/:id', (req, res, next) => {
  res.status(200).json({ message: 'Get By Id Orders Items route is under construction' });
  next();
});
AdminRoute.put('/api/admin/orders-items/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'Updated Orders Items route is under construction' });
  next();
});
AdminRoute.delete('/api/admin/orders-items/:id/delete', (req, res, next) => {
  res.status(200).json({ message: 'Delete Orders Items route is under construction' });
  next();
});

/* ===================== {ADMIN PAYMENTS ROUTE} ===================== */
AdminRoute.post('/api/admin/payments/create', (req, res, next) => {
  res.status(200).json({ message: 'Create Payments route is under construction' });
  next();
});
AdminRoute.get('/api/admin/payments', (req, res, next) => {
  res.status(200).json({ message: 'Get Payments route is under construction' });
  next();
});
AdminRoute.get('/api/admin/payments/:id', (req, res, next) => {
  res.status(200).json({ message: 'Get By Id Payments route is under construction' });
  next();
});
AdminRoute.put('/api/admin/payments/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'Updated Payments route is under construction' });
  next();
});
AdminRoute.delete('/api/admin/payments/:id/delete', (req, res, next) => {
  res.status(200).json({ message: 'Delete Payments route is under construction' });
  next();
});

/* ===================== {ADMIN PAYMENTS CONFIRMATION ROUTE} ===================== */
AdminRoute.post('/api/admin/payments-confirmation/create', (req, res, next) => {
  res.status(200).json({ message: 'Create Payments Confirmation route is under construction' });
  next();
});
AdminRoute.get('/api/admin/payments-confirmation', (req, res, next) => {
  res.status(200).json({ message: 'Get Payments Confirmation route is under construction' });
  next();
});
AdminRoute.get('/api/admin/payments-confirmation/:id', (req, res, next) => {
  res.status(200).json({ message: 'Get By Id Payments Confirmation route is under construction' });
  next();
});
AdminRoute.put('/api/admin/payments-confirmation/:id/update', (req, res, next) => {
  res.status(200).json({ message: 'Updated Payments Confirmation route is under construction' });
  next();
});
AdminRoute.delete('/api/admin/payments-confirmation/:id/delete', (req, res, next) => {
  res.status(200).json({ message: 'Delete Payments Confirmation route is under construction' });
  next();
});

export default AdminRoute;
