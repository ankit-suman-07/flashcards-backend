const authService = require('../services/auth.service');

async function userLogin(req, res) {
  try {
    const { email, passwordHash } = req.body;
    const user = await authService.userLogin(email, passwordHash);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function userLogout(req, res) {
  try {
    res.status(200).json({"logout": "User logged out"});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  userLogin,
  userLogout
};