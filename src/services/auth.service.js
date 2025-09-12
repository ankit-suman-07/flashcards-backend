const { User } = require('../database/models');

async function userLogin(email, passwordHash) {
  const user = await User.findOne({ where: { email, passwordHash } });
  return user;
}

async function userLogout() {
  // Implement logout logic if needed (e.g., token invalidation)
  return true;
}

module.exports = {
  userLogin,
  userLogout
};
