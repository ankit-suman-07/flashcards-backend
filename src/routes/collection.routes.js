const express = require('express');
const router = express.Router();

// ## 📂 **Collections (`/api/collections/*`)** → `collection.routes.js`

// * `POST /` → Create a collection.
// * `GET /` → List all collections.
// * `GET /:collectionId` → Get collection details.
// * `POST /:collectionId/decks/:deckId` → Add deck to collection.
// * `GET /:collectionId/decks` → List decks in collection.
// * `DELETE /:collectionId/decks/:deckId` → Remove deck from collection.

module.exports = router;