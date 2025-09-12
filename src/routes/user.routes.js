const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// router.get('/me', userController.)

router.get('/', userController.getAllUsers);

// POST /api/users/register → Create account (signup).
router.post('/register', userController.registerUser);

// POST /api/users/login → Login and get token (simple mock token in Phase 1).
router.post('/login', userController.userLogin);

// POST /api/users/logout → Invalidate session (optional in Phase 1, full in Phase 3).
// router.post('/logout', userController.);

// GET /api/users/:userId → Get user profile (details: decks, collections, progress).
router.get('/:userId', userController.getUserProfile);

// GET /api/users/:userId/stats → Get streaks, XP, and learning stats.
// router.get('/:userId/stats', userController.createUser);


module.exports = router;