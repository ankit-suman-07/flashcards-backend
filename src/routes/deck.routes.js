const express = require('express');
const router = express.Router();
const deckController = require('../controllers/deck.controller');


// GET /api/decks → List all decks (with optional ?tag= filter).
router.get('/', deckController.getAllDecks);

// POST /api/decks → Create a new deck.
router.post('/', deckController.createDeck);

// GET /api/decks/:deckId → Get details of a deck (cards included).
router.post('/:deckId', deckController.getDeckById);

// PUT /api/decks/:deckId → Update deck (name, description, tags, visibility).
router.put('/:userId', deckController.updateDeckById);

// DELETE /api/decks/:deckId → Delete deck.
router.delete('/:deckId', deckController);


module.exports = router;





