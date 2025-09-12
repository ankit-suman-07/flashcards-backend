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
    const [updatedRowCount, updatedRows] = await Deck.update(updateData, {
        where: {id: deckId},
        returning: true,
        plain: true
    });

    if (updatedRowCount === 0) {
        return null;
    }

    return updatedRows;
}

async function deleteDeckById(deckId) {
    const deck = await Deck.findByPk(deckId);
    if(deck === null) {
        return null;
    }

    await deck.destroy();

    return deck;
}

module.exports = {
    getAllDecks,
    createDeck,
    getDeckById,
    updateDeckById,
    deleteDeckById
};