const userService = require('../services/user.service');

async function getAllUsers(req, res) {
  try {
    // Getting users
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function registerUser(req, res) {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function userLogin(req, res) {
  try {
    const { email, passwordHash } = req.body;
    const user = await userService.userLogin(email, passwordHash);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// async function userLogout(req, res) {
//   try {
    
//   } catch (err) {
    
//   }
// }

async function getUserProfile(req, res) {
  try {
    const id = req.params.userId;
    const user = await userService.getUserProfile(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}



module.exports = {
  getAllUsers,
  registerUser,
  userLogin,
  getUserProfile
};