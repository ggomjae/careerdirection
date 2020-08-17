const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/list', userController.userList);

module.exports = router;