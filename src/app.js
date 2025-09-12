const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('./routes/user.routes');
const deckRoutes = require('./routes/deck.routes');
const cardRoutes = require('./routes/card.routes');
const revisionRoutes = require('./routes/revision.routes');
const collectionRoutes = require('./routes/collection.routes');
const shareRoutes = require('./routes/share.routes');
const aiRoutes = require('./routes/ai.routes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./database/config/swagger');

const {sequelize} = require('./database/models');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Swagger docs route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/users', userRoutes);
app.use('/api/decks', deckRoutes);
app.use('/api/decks/:deckId/cards', cardRoutes);
app.use('/api', revisionRoutes);
// app.use('/api/collections', collectionRoutes);
// app.use('/api/decks/:deckId/cards', shareRoutes);
// app.use('/api/decks/:deckId/cards', aiRoutes);

app.get('/test', (req, res) => res.send('Server is working'));


app.get('/', (req, res) => {
    res.send('FlasCard API running...');
});

sequelize.authenticate()
    .then(() => {
        console.log('✅ Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('❌ Unable to connect to the database:', error);
    })

module.exports = app;