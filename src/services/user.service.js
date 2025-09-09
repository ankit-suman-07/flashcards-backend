const { User } = require('../database/models');

async function getAllUsers() {
  const users = await User.findAll();
  return users;
}

async function registerUser(userData) {
  const newUser = await User.create(userData);
  return newUser;
}

async function userLogin(email, passwordHash) {
  const user = await User.findOne({ where: { email, passwordHash } });
  return user;
}

async function userLogout() {
  // Implement logout logic if needed (e.g., token invalidation)
  return true;
}

async function getUserProfile(userId) {
  const user = await User.findByPk(userId);
  return user;
}

module.exports = {
  getAllUsers,
  registerUser,
  userLogin
};
