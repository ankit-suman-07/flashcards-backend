const deckService = require('../services/deck.service');

async function getAllDecks(req, res) {
  try {
    // Getting decks
    const decks = await deckService.getAllDecks();
    res.status(200).json(decks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function createDeck(req, res) {
    try{
        const deck = await deckService.createDeck(req.body);
        res.status(200).json(deck);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
}

async function getDeckById(req, res) {
    try{
        const id = req.params.deckId;
        const deck = await deckService.getDeckById(id);
        res.status(200).json(deck);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
}

async function updateDeckById(req, res) {
    const id = req.params.deckId
    const updateData = req.body;
    try {
        const updatedDeck = await deckService.updateDeckById(id, updateData);
        if (!updatedDeck) {
      return res.status(404).json({ message: 'Deck not found' });
    }
    res.status(200).json(updatedDeck);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
  getAllDecks,
  createDeck,
  getDeckById,
  updateDeckById
};