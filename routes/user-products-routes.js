const express = require('express');
const user_productController = require('../controllers/user-product-controller');
const router = express.Router();
router.get('/', user_productController.Product)
router.get('/details/:id', user_productController.getDetail)
module.exports = router;