const express = require('express');
const router = express.Router();
const revisionController = require('../controllers/revision.controller');

// ### 🔁 **Revisions (`/api/revisions/*`)** → `revision.routes.js`

// * `POST /api/revisions` → **Start a revision session** (creates `revision_session`, requires `deckId`).
// * `POST /api/revisions/:revisionId/cards/:cardId/answer` → **Submit confidence** (`got_it`, `almost`, `again`) → updates **CardProgress**.
// * `GET /api/revisions/:revisionId/next` → **Get next card** for revision.
// * `GET /api/revisions/:revisionId/progress` → **Get progress summary** for session (deck-level stats).
// * `GET /api/revisions/history` → **Get past sessions** with summary + stats.

// router.post('/', revisionController.startRevisionSession);
// router.post('/:revisionId/cards/:cardId/answer', revisionController.submitAnswer);
// router.get('/:revisionId/next', revisionController.getNextCard);
// router.get('/:revisionId/progress', revisionController.getProgressSummary);
// router.get('/history', revisionController.getPastSessions);

// Spaced repetition schedule (phase 4)
// router.get('/:revisionId/schedule', revisionController.getSpacedRepetitionSchedule);

module.exports = router;