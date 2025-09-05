const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');


// POST
router.post('/users', userController.createUser);

// GET
router.get('/users', userController.getUsers);

module.exports = router;