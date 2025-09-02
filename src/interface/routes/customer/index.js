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

/* ==================== { CATEGORY } ==================== */
CustormerRoutes.get('/api/customer/category/', (req, res, next) => {
  res.status(200).json({ message: ' Get category is under constructor ' });
  next();
});

CustormerRoutes.get('/api/customer/category/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id category is under constructor ' });
  next();
});

/* ==================== { PRODUCTS } ==================== */
CustormerRoutes.get('/api/customer/products/', (req, res, next) => {
  res.status(200).json({ message: ' Get products is under constructor ' });
  next();
});
CustormerRoutes.get('/api/customer/products/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id products is under constructor ' });
  next();
});
/* ==================== {CARTS } ==================== */
CustormerRoutes.post('/api/customer/carts/create', (req, res, next) => {
  res.status(200).json({ message: ' Create carts is under constructor ' });
  next();
});

CustormerRoutes.get('/api/customer/carts/', (req, res, next) => {
  res.status(200).json({ message: ' Get carts is under constructor ' });
  next();
});
CustormerRoutes.get('/api/customer/carts/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id carts is under constructor ' });
  next();
});

CustormerRoutes.put('/api/customer/carts/:id', (req, res, next) => {
  res.status(200).json({ message: ' update carts is under constructor ' });
  next();
});

CustormerRoutes.delete('/api/customer/carts/:id', (req, res, next) => {
  res.status(200).json({ message: ' delete carts is under constructor ' });
  next();
});
/* ==================== {CARTS ITEMS } ==================== */
CustormerRoutes.post('/api/customer/cart-items/create', (req, res, next) => {
  res.status(200).json({ message: ' Create cart items is under constructor ' });
  next();
});

CustormerRoutes.get('/api/customer/cart-items/', (req, res, next) => {
  res.status(200).json({ message: ' Get cart items is under constructor ' });
  next();
});
CustormerRoutes.get('/api/customer/cart-items/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id cart items is under constructor ' });
  next();
});

CustormerRoutes.put('/api/customer/cart-items/:id', (req, res, next) => {
  res.status(200).json({ message: ' update cart items is under constructor ' });
  next();
});

CustormerRoutes.delete('/api/customer/cart-items/:id', (req, res, next) => {
  res.status(200).json({ message: ' delete cart items is under constructor ' });
  next();
});
/* ==================== {ORDERS } ==================== */
CustormerRoutes.post('/api/customer/orders/create', (req, res, next) => {
  res.status(200).json({ message: ' Create orders is under constructor ' });
  next();
});

CustormerRoutes.get('/api/customer/orders/', (req, res, next) => {
  res.status(200).json({ message: ' Get orders is under constructor ' });
  next();
});
CustormerRoutes.get('/api/customer/orders/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id orders is under constructor ' });
  next();
});

CustormerRoutes.put('/api/customer/orders/:id', (req, res, next) => {
  res.status(200).json({ message: ' update orders is under constructor ' });
  next();
});

CustormerRoutes.delete('/api/customer/orders/:id', (req, res, next) => {
  res.status(200).json({ message: ' delete orders is under constructor ' });
  next();
});

/* ==================== {ORDERS ITEMS } ==================== */
CustormerRoutes.post('/api/customer/order-items/create', (req, res, next) => {
  res.status(200).json({ message: ' Create order items is under constructor ' });
  next();
});

CustormerRoutes.get('/api/customer/order-items/', (req, res, next) => {
  res.status(200).json({ message: ' Get order items is under constructor ' });
  next();
});
CustormerRoutes.get('/api/customer/order-items/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id order items is under constructor ' });
  next();
});

CustormerRoutes.put('/api/customer/order-items/:id', (req, res, next) => {
  res.status(200).json({ message: ' update order items is under constructor ' });
  next();
});

CustormerRoutes.delete('/api/customer/order-items/:id', (req, res, next) => {
  res.status(200).json({ message: ' delete order items is under constructor ' });
  next();
});
/* ==================== {PAYMENTS } ==================== */
CustormerRoutes.post('/api/customer/payments/create', (req, res, next) => {
  res.status(200).json({ message: ' Create payments is under constructor ' });
  next();
});

CustormerRoutes.get('/api/customer/payments/', (req, res, next) => {
  res.status(200).json({ message: ' Get payments is under constructor ' });
  next();
});

CustormerRoutes.get('/api/customer/payments/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id payments is under constructor ' });
  next();
});

CustormerRoutes.put('/api/customer/payments/:id', (req, res, next) => {
  res.status(200).json({ message: ' update payments is under constructor ' });
  next();
});

CustormerRoutes.delete('/api/customer/payments/:id', (req, res, next) => {
  res.status(200).json({ message: ' delete payments is under constructor ' });
  next();
});
/* ==================== {PAYMENTS CONFIRMATION } ==================== */
CustormerRoutes.post('/api/customer/payment-confirmation/create', (req, res, next) => {
  res.status(200).json({ message: ' Create payment confirmation is under constructor ' });
  next();
});

CustormerRoutes.get('/api/customer/payment-confirmation/', (req, res, next) => {
  res.status(200).json({ message: ' Get payment confirmation is under constructor ' });
  next();
});

CustormerRoutes.get('/api/customer/payment-confirmation/:id', (req, res, next) => {
  res.status(200).json({ message: ' Get by id payment confirmation is under constructor ' });
  next();
});

CustormerRoutes.put('/api/customer/payment-confirmation/:id', (req, res, next) => {
  res.status(200).json({ message: ' update payment confirmation is under constructor ' });
  next();
});

CustormerRoutes.delete('/api/customer/payment-confirmation/:id', (req, res, next) => {
  res.status(200).json({ message: ' delete payment confirmation is under constructor ' });
  next();
});

export default CustormerRoutes;
