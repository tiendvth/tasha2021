const express = require('express');
const message_postController = require('../controllers/post-message-controller');
const router = express.Router();
router.post('/contact',message_postController.saveContact);
router.post('/feedback',message_postController.saveFeedBack);
router.post('/complaint',message_postController.saveComplaint);

module.exports = router;
