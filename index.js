const express = require('express');
const {Sequelize} = require('sequelize');

const app =express();

const sequelizeInstance = new Sequelize('postgres', 'postgres', '8697', {
    host: 'localhost',
    port: 8697,
    dialect: 'postgres'
});

sequelizeInstance.authenticate()
  .then(() => {
    console.log('✅ Connection has been established successfully.');
  }).catch((error) => {
    console.error('❌ Unable to connect to the database:', error);
  });