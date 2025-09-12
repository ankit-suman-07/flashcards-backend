const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// router.get('/me', userController.)

// POST /api/users/login → Login and get token (simple mock token in Phase 1).
router.post('/login', authController.userLogin);

// POST /api/users/logout → Invalidate session (optional in Phase 1, full in Phase 3).
router.post('/logout', authController.userLogout);


module.exports = router;