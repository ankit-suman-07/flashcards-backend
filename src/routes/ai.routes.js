const express = require('express');
const router = express.Router();

// ## 🤖 **AI (`/api/ai/*`)** → `ai.routes.js`

// * `POST /cards/generate` → Upload PDF/text → AI generates cards.
// * `GET /cards/status/:jobId` → Check status (`pending`, `processing`, `done`).
// * `GET /cards/:jobId/results` → Retrieve generated cards.

// AI-generated cards
// router.post('/generate', aiController.generateCards);
// router.get('/status/:jobId', aiController.checkJobStatus);
// router.get('/:jobId/results', aiController.getGeneratedCards);

module.exports = router;