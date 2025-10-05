const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/auth');
const controller = require('../controllers/userController');

router.get('/profile', authenticate, controller.getUserProfile);
router.get('/getUserByEmail', controller.getUserByEmail);
router.get('/getUserByFirebaseId', controller.getUserByFirebaseId);

module.exports = router;