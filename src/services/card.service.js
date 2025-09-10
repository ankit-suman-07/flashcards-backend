const { Card } = require('../database/models');

async function getAllCards() {
    const cards = await Card.findAll();
    return cards;
}

async function getCardById(cardId) {
    const card = await Card.findByPk(cardId);
    return card;
} 

module.exports = {
    getAllCards,
    getCardById
};