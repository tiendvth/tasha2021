const express = require('express');
const categoryController = require('../controllers/admin-category-controller');
const router = express.Router();

router.get('/list', categoryController.getList)

router.get('/create', categoryController.create)

router.post('/create', categoryController.store)

router.get('/detail/:id', categoryController.getDetail)

router.get('/edit/:id', categoryController.edit)

router.post('/edit/:id', categoryController.update)

router.get('/delete/:id', categoryController.deleteMaKhongDelete)

module.exports = router; // cho phép sử dụng ở bên ngoài.