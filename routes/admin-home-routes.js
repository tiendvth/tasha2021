const express = require('express');
const exampleController = require('../controllers/admin-home-controller');
const router = express.Router();
router.get('/',exampleController.home);
router.get('/form', exampleController.getForm)

router.get('/table', exampleController.getTable)

module.exports = router; // cho phép sử dụng ở bên ngoài.
