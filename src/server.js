const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
