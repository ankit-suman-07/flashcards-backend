const express = require('express');
const router = express.Router();
const cardController = require('../controllers/card.controller');


// GET /api/decks/:deckId/cards → List all cards in a deck
router.get('/', cardController.getAllCards);

// POST /api/decks/:deckId/cards → Add new card to deck
router.post('/', cardController.createCard);

// GET /api/decks/:deckId/cards/:cardId → Get single card
router.get('/:cardId', cardController.getCardById);

// PUT /api/decks/:deckId/cards/:cardId → Update card (question, answer, media, isBidirectional)
router.put('/:cardId', cardController.updateCardById);

// DELETE /api/decks/:deckId/cards/:cardId → Delete card
router.delete('/:cardId', cardController.deleteCardById);

// Card media routes
// router.post('/', cardController.uploadMedia);
// router.get('/', cardController.getMedia);
// router.delete('/:mediaId', cardController.deleteMedia);

module.exports = router;