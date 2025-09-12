const express = require('express');
const router = express.Router();
const revisionController = require('../controllers/revision.controller');

// Revision (`/api/decks/:deckId/revision`)
// * `POST /api/decks/:deckId/revision/start` → Start a revision session.
// * `POST /api/decks/:deckId/revision/:cardId/answer` → Submit confidence (`got_it | almost | again`) → updates **CardProgress**.
// * `GET /api/decks/:deckId/revision/next` → Get next card in sequence.
// * `GET /api/decks/:deckId/revision/progress` → Summary progress for the deck.
// * `GET /api/revision/history` → Fetch past sessions & stats.

module.exports = router;