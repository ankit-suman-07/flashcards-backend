const { Card } = require('../database/models');

async function getAllCards() {
    const cards = await Card.findAll();
    return cards;
}

async function createCard(cardData) {
    const card = await Card.create(cardData);
    return card;
}

async function getCardById(deckId, cardId) {
    const card = await Card.findOne({
        where: {
            id: cardId,
            deckId: deckId
        }
    });

    if(!card) {
        return null;
    }

    return card;
} 

async function updateCardById(cardId, deckId, updateData) {
    const [updatedRowCount, updatedRows] = await Card.update(updateData, {
        where: {
            id: cardId,
            deckId: deckId
        },
        returning: true,
        plain: true
    });

    if (updatedRowCount === 0) {
        return null;
    }

    return updatedRows;
}

async function deleteCardById(deckId, cardId) {
    const card = await Card.findOne({
        where: {
            id: cardId,
            deckId: deckId
        }
    });
    if(card === null) {
        return null;
    }

    await card.destroy();

    return card;
}


module.exports = {
    getAllCards,
    getCardById,
    createCard,
    updateCardById,
    deleteCardById
};