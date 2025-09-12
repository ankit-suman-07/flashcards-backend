const { User } = require('../database/models');

async function registerUser(userData) {
  const newUser = await User.create(userData);
  return newUser;
}

async function getAllUsers() {
  const users = await User.findAll();
  return users;
}

async function getUserProfile(userId) {
  const user = await User.findByPk(userId);
  return user;
}

module.exports = {
  registerUser,
  getAllUsers,
  getUserProfile
};
