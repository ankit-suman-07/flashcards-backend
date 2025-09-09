const { User } = require('../database/models');

async function createUser(userData) {
  const newUser = await User.create(userData);
  return newUser;
}

async function getAllUsers() {
  const users = await User.findAll();
  return users;
}

module.exports = {
  createUser,
  getAllUsers
};
