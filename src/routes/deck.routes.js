const express = require('express');
const router = express.Router();
const deckController = require('../controllers/deck.controller');
const cardController = require('../controllers/card.controller');


// GET /api/decks → List all decks (with optional ?tag= filter).
router.get('/', deckController.getAllDecks);

// POST /api/decks → Create a new deck.
router.post('/', deckController.createDeck);

// GET /api/decks/:deckId → Get details of a deck (cards included).
router.get('/:deckId', deckController.getDeckById);

// PUT /api/decks/:deckId → Update deck (name, description, tags, visibility).
router.put('/:deckId', deckController.updateDeckById);

// DELETE /api/decks/:deckId → Delete deck.
router.delete('/:deckId', deckController.deleteDeckById);


module.exports = router;




