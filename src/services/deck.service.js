const { Deck } = require('../database/models');

async function getAllDecks() {
    const decks = await Deck.findAll();
    return decks;
}

async function createDeck(deckData) {
    const deck = await Deck.create(deckData);
    return deck;
}

async function getDeckById(deckId) {
    const deck = await Deck.findByPk(deckId);
    return deck;
}

async function updateDeckById(deckId, updateData) {
    const [updatedRowCount, updatedRows] = Deck.update(updateData, {
        where: {id: deckId},
        returning: true,
        plain: true
    });

    if (updatedRowCount === 0) {
        return null;
    }

    return updatedRows;
}

module.exports = {
    getAllDecks,
    createDeck,
    updateDeckById
};