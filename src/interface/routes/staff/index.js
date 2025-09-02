import express from 'express';

const StaffRoutes = express.Router();

/* ==================== { USER STAFF } ==================== */
StaffRoutes.post('/api/staff/user-staff/create', (req, res, next) => {
  res.status(200).json({ message: ' Create user staff is under constructor ' });
  next();
});

StaffRoutes.get('/api/staff/user-staff/', (req, res, next) => {
  res.status(200).json({ message: ' Get user staff is under constructor ' });
  next();
});

StaffRoutes.get('/api/staff/user-staff/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id user staff is under constructor ' });
  next();
});

StaffRoutes.put('/api/staff/user-staff/:id', (req, res, next) => {
  res.status(200).json({ message: ' update user staff is under constructor ' });
  next();
});

StaffRoutes.delete('/api/staff/user-staff/:id', (req, res, next) => {
  res.status(200).json({ message: ' delete user staff is under constructor ' });
  next();
});

/* ==================== { USER CUSTOMER } ==================== */
StaffRoutes.get('/api/staff/user-customer/', (req, res, next) => {
  res.status(200).json({ message: ' Get user customer is under constructor ' });
  next();
});

StaffRoutes.get('/api/staff/user-customer/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id user customer is under constructor ' });
  next();
});
/* ==================== { PRODUCTS } ==================== */
StaffRoutes.post('/api/staff/products/create', (req, res, next) => {
  res.status(200).json({ message: ' Create products is under constructor ' });
  next();
});

StaffRoutes.get('/api/staff/products/', (req, res, next) => {
  res.status(200).json({ message: ' Get products is under constructor ' });
  next();
});
StaffRoutes.get('/api/staff/products/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id products is under constructor ' });
  next();
});

StaffRoutes.put('/api/staff/products/:id', (req, res, next) => {
  res.status(200).json({ message: ' update products is under constructor ' });
  next();
});

/* ==================== { CATEGORY} ==================== */
StaffRoutes.get('/api/staff/category/', (req, res, next) => {
  res.status(200).json({ message: ' Get category is under constructor ' });
  next();
});

StaffRoutes.get('/api/staff/category/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id category is under constructor ' });
  next();
});

/* ==================== { CARTS } ==================== */
StaffRoutes.get('/api/staff/carts/', (req, res, next) => {
  res.status(200).json({ message: ' Get carts is under constructor ' });
  next();
});

StaffRoutes.get('/api/staff/carts/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id carts is under constructor ' });
  next();
});

/* ==================== { CARTS ITEM } ==================== */
StaffRoutes.get('/api/staff/carts-item/', (req, res, next) => {
  res.status(200).json({ message: ' Get carts item is under constructor ' });
  next();
});

StaffRoutes.get('/api/staff/carts-item/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id carts item is under constructor ' });
  next();
});

/* ==================== { ORDER } ==================== */
StaffRoutes.get('/api/staff/order/', (req, res, next) => {
  res.status(200).json({ message: ' Get order is under constructor ' });
  next();
});

StaffRoutes.get('/api/staff/order/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id order is under constructor ' });
  next();
});

/* ==================== { ORDER ITEMS } ==================== */
StaffRoutes.get('/api/staff/order-items/', (req, res, next) => {
  res.status(200).json({ message: ' Get order items is under constructor ' });
  next();
});

StaffRoutes.get('/api/staff/order-items/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id order items is under constructor ' });
  next();
});

/* ==================== { PAYMENT  } ==================== */
StaffRoutes.get('/api/staff/payment/', (req, res, next) => {
  res.status(200).json({ message: ' Get payment is under constructor ' });
  next();
});

StaffRoutes.get('/api/staff/payment/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id payment is under constructor ' });
  next();
});

StaffRoutes.put('/api/staff/payment/:id', (req, res, next) => {
  res.status(200).json({ message: ' update payment is under constructor ' });
  next();
});
/* ==================== { PAYMENT CONFIRMATION } ==================== */
StaffRoutes.get('/api/staff/payment-confirmation/', (req, res, next) => {
  res.status(200).json({ message: ' Get payment confirmation is under constructor ' });
  next();
});

StaffRoutes.get('/api/staff/payment-confirmation/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id payment confirmation is under constructor ' });
  next();
});

StaffRoutes.put('/api/staff/payment-confirmation/:id', (req, res, next) => {
  res.status(200).json({ message: ' update payment confirmation is under constructor ' });
  next();
});

export default StaffRoutes;
