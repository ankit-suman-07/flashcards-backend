const express = require('express');
const router = express.Router();

// ## 🤝 **Sharing (`/api/decks/:deckId/share/*`, `/api/collections/:collectionId/share/*`)** → `share.routes.js`

// * `POST /decks/:deckId/share` → Share deck with another user.
// * `PUT /decks/:deckId/share/:userId` → Update sharing permission (`view | edit`).
// * `DELETE /decks/:deckId/share/:userId` → Revoke sharing.
// * `POST /collections/:collectionId/share` → Share collection with another user.
// * `GET /decks/shared-with-me` → List decks shared with me.
// * `GET /collections/shared-with-me` → List collections shared with me.

// // Deck sharing
// router.post('/decks/:deckId/share', shareController.shareDeck);
// router.put('/decks/:deckId/share/:userId', shareController.updateDeckSharing);
// router.delete('/decks/:deckId/share/:userId', shareController.revokeDeckSharing);

// // Collection sharing
// router.post('/collections/:collectionId/share', shareController.shareCollection);

// // Shared resource lists
// router.get('/decks', shareController.listSharedDecks);
// router.get('/collections', shareController.listSharedCollections);


module.exports = router;