const express = require('express');
const articleController = require('../controllers/admin-article-controller');
const router = express.Router();

router.get('/list', articleController.getList)

router.get('/create', articleController.create)

router.post('/create', articleController.store)

router.get('/detail/:id', articleController.getDetail)

router.get('/edit/:id', articleController.edit)

router.post('/edit/:id', articleController.update)

router.get('/delete/:id', articleController.deleteMaKhongDelete)

module.exports = router; // cho phép sử dụng ở bên ngoài.