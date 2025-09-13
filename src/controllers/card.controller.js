const cardService = require('../services/card.service');

async function getAllCards(req, res) {
    try {
        const cards = await cardService.getAllCards();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function createCard(req, res) {
    try{
        const card = await cardService.createCard(req.body);
        res.status(200).json(card);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}

async function getCardById(req, res) {
    
    const deckId = req.params.deckId;
    const cardId = req.params.cardId;
    try {
        const card = await cardService.getCardById(deckId, cardId);
        res.status(200).json(card);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateCardById(req, res) {
    const deckId = req.params.deckId
    const cardId = req.params.cardId
    const updateData = req.body;
    try {
        const updatedCard = await cardService.updateCardById(deckId, cardId, updateData);
        if (!updatedCard) {
            return res.status(404).json({ message: 'Deck not found' });
        }
        
        res.status(200).json(updatedCard);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

async function deleteCardById(req, res) {
    const cardId = req.params.cardId;
    const deckId = req.params.deckId;
    try {
        const deletedCard = await cardService.deleteCardById(deckId, cardId);
        res.status(200).json(deletedCard);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllCards,
    createCard,
    getCardById,
    updateCardById,
    deleteCardById
};