const express = require('express');
const userController = require('../controllers/admin-user-controller');
const router = express.Router();

router.get('/list', userController.getList)

router.get('/create', userController.create)

router.post('/create', userController.store)

router.get('/detail/:id', userController.getDetail)

router.get('/edit/:id', userController.edit)

router.post('/edit/:id', userController.update)

router.get('/delete/:id', userController.deleteMaKhongDelete)

module.exports = router; // cho phép sử dụng ở bên ngoài.