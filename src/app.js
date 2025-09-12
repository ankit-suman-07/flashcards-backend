const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/auth.routes');
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

app.get('/', (req, res) => {
    res.send('FlasCard API running...');
});

app.get('/test', (req, res) => res.send('Server is working'));

// app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/decks', deckRoutes);

// app.use('/api/decks/:deckId/cards', cardRoutes);

// // app.use('/api/cards', cardRoutes);
// app.use('/api/revision', revisionRoutes);
// app.use('/api/collections', collectionRoutes);
// app.use('/api/decks/:deckId/cards', shareRoutes);
// app.use('/api/decks/:deckId/cards', aiRoutes);

// Mount routes
app.use('/api/auth', authRoutes);            // /api/auth/*
app.use('/api/users', userRoutes);           // /api/users/*
app.use('/api/decks', deckRoutes);           // /api/decks/*
app.use('/api/decks/:deckId/cards', cardRoutes);           // /api/decks/:deckId/cards/*
app.use('/api/cards/:cardId/media', cardRoutes);           // /api/cards/:cardId/*
app.use('/api/revisions', revisionRoutes);   // /api/revisions/*
app.use('/api/collections', collectionRoutes); // /api/collections/*
app.use('/api/shared', shareRoutes);         // /api/shared/decks, /api/shared/collections
app.use('/api/ai/cards', aiRoutes);          // /api/ai/cards/*

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

sequelize.authenticate()
    .then(() => {
        console.log('✅ Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('❌ Unable to connect to the database:', error);
    })

module.exports = app;