const express = require('express');
const productController = require('../controllers/admin-product-controller');
const router = express.Router();
router.get('/generate-seed', productController.generateSeedData)
router.get('/list', productController.getList)

router.get('/create', productController.create)

router.post('/create', productController.store)

router.get('/detail/:id', productController.getDetail)

router.get('/edit/:id', productController.edit)

router.post('/edit/:id', productController.update)

router.get('/delete/:id', productController.deleteMaKhongDelete)

module.exports = router; // cho phép sử dụng ở bên ngoài.