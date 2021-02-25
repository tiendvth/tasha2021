const express = require('express');
const user_postController = require('../controllers/user-post-controller');
const router = express.Router();

router.post('/create', user_postController.store)
router.post('/login', user_postController.login)
router.get('/logout',user_postController.logout)
router.get('/profile/:id',user_postController.detailUser)
router.get('/edit/:id',user_postController.editUser)
router.post('/edit/:id',user_postController.update)
module.exports = router;