const express = require('express');
const router = express.Router();

// ## 🤖 **AI (`/api/ai/*`)** → `ai.routes.js`

// * `POST /cards/generate` → Upload PDF/text → AI generates cards.
// * `GET /cards/status/:jobId` → Check status (`pending`, `processing`, `done`).
// * `GET /cards/:jobId/results` → Retrieve generated cards.

module.exports = router;