const express = require('express');
const router = express.Router();
const cardController = require('../controllers/card.controller');


// GET /api/decks/:deckId/cards → List all cards in a deck.
// POST /api/decks/:deckId/cards → Add new card to deck.

// GET /api/decks/:deckId/cards/:cardId → Get single card.
// PUT /api/decks/:deckId/cards/:cardId → Update card (question, answer, media, isBidirectional).
// DELETE /api/decks/:deckId/cards/:cardId → Delete card

module.exports = router;