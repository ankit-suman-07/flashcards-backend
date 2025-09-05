const app = require('./app');
const db = require('./database/models');
require('dotenv').config();

const PORT = process.env.PORT || 5555;

// Use force: true only for testing (drops tables each restart)
db.sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Express server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to sync database:", err);
  });
