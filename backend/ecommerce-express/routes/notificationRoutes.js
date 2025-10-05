const express = require('express');
const router = express.Router();
const controller = require('../controllers/notificationController');

router.get('/', controller.getAllNotifications);
router.post('/', controller.createNotification);
router.delete('/:id', controller.deleteNotification);

module.exports = router;
