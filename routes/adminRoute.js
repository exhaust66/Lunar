const express = require('express');
const createProduct=require('../controllers/productController');
const adminLogin = require('../controllers/adminLogin'); // Import the controller
const router = express.Router();

// Define the route for login
router.post('/login', adminLogin.loginAdmin);  // Use the correct method from the controller
router.post('/product',createProduct);
module.exports = router;
