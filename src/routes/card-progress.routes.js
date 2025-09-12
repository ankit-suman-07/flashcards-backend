const express = require('express');
const router = express.Router();
const cardProgressController = require('../controllers/card-progress.controller');

// POST /api/decks/:deckId/revision/start → Start revision session.
// POST /api/decks/:deckId/revision/:cardId/answer → Submit confidence (got_it | almost | again) → updates CardProgress.
// GET /api/decks/:deckId/revision/next → Get next card in sequence.
// GET /api/decks/:deckId/revision/progress → Get progress summary for this deck.
// GET /api/revision/history → Retrieve past sessions and stats.

module.exports = router;