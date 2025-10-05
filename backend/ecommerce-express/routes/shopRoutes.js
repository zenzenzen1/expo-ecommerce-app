const express = require('express');
const router = express.Router();
const controller = require('../controllers/shopController');

router.get('/:id', controller.getShopById);

module.exports = router;