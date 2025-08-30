import express from 'express';

const CustormerRoutes = express.Router();

/* ==================== {USER CUSTOMER } ==================== */
CustormerRoutes.post('/api/customer/user-customer/create', (req, res, next) => {
  res.status(200).json({ message: ' Create user customer is under constructor ' });
  next();
});

CustormerRoutes.get('/api/customer/user-customer/', (req, res, next) => {
  res.status(200).json({ message: ' Get user customer is under constructor ' });
  next();
});
CustormerRoutes.get('/api/customer/user-customer/create', (req, res, next) => {
  res.status(200).json({ message: ' Get by id user customer is under constructor ' });
  next();
});

CustormerRoutes.put('/api/customer/user-customer/create', (req, res, next) => {
  res.status(200).json({ message: ' update user customer is under constructor ' });
  next();
});

CustormerRoutes.delete('/api/customer/user-customer/create', (req, res, next) => {
  res.status(200).json({ message: ' delete user customer is under constructor ' });
  next();
});
/* ==================== { PRODUCTS } ==================== */
/* ==================== {CARTS } ==================== */
/* ==================== {CARTS ITEMS } ==================== */
/* ==================== {ORDERS } ==================== */
/* ==================== {ORDERS ITEMS } ==================== */
/* ==================== {PAYMENTS } ==================== */
/* ==================== {PAYMENTS CONFIRMATION } ==================== */

export default CustormerRoutes;
