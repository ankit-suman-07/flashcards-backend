const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const {sequelize} = require('../models');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

sequelize.authenticate()
    .then(() => {
        console.log('✅ Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('❌ Unable to connect to the database:', error);
    })

module.exports = app;