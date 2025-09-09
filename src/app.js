const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('./routes/user.routes');

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

app.use('/users', userRoutes);


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