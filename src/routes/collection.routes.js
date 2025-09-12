const express = require('express');
const router = express.Router();

// ## 📂 **Collections (`/api/collections/*`)** → `collection.routes.js`

// * `POST /` → Create a collection.
// * `GET /` → List all collections.
// * `GET /:collectionId` → Get collection details.
// * `POST /:collectionId/decks/:deckId` → Add deck to collection.
// * `GET /:collectionId/decks` → List decks in collection.
// * `DELETE /:collectionId/decks/:deckId` → Remove deck from collection.


// Collections CRUD and deck management
// router.post('/', collectionController.createCollection);
// router.get('/', collectionController.listCollections);
// router.get('/:collectionId', collectionController.getCollection);

// router.post('/:collectionId/decks/:deckId', collectionController.addDeckToCollection);
// router.get('/:collectionId/decks', collectionController.listDecksInCollection);
// router.delete('/:collectionId/decks/:deckId', collectionController.removeDeckFromCollection);

module.exports = router;